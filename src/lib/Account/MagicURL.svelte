<script>
	/**
	 * @slot {{
	 * actions: {
	 *  create: (userId: string, email: string, url?: string) => Promise<any>;
	 * }
	 * }}
	 */
	import { createEventDispatcher } from 'svelte';
	import { active } from '../_stores';
	import { SDK as Appwrite } from '../_appwrite';
	import axios from 'axios';
	import { currentUser } from '../_stores';

	const href = window.location.href;
	const url = new URL(href);
	const search = url.searchParams;
	const userId = search.get('userId');
	const secret = search.get('secret');

	const endpoint = Appwrite.sdk.config.endpoint;
	const project = Appwrite.sdk.config.project;

	const dispatch = createEventDispatcher();
	const actions = {
		create: async (/** @type {string} */ userId, /** @type {string} */ email, url = '') => {
			try {
				const response = await Appwrite.sdk.account.createMagicURLSession(userId, email, url);
				dispatch('successCreate', response);
				currentUser.reload();
				return response;
			} catch (error) {
				dispatch('failureCreate', error);
			}
		},
		complete: async () => {
			try {
				const response = await axios.put(
					`${endpoint}/account/sessions/magic-url`,
					{
						userId: userId,
						secret: secret
					},
					{
						headers: {
							'X-Appwrite-Project': `${project}`
						}
					}
				);
				dispatch('successComplete', response);
			} catch (error) {
				dispatch('failureComplete', error);
			}
		}
	};

	let complete;
</script>

<!--
@component

Creates Magic URL Session.

### `<MagicURL />`

#### Directives

**let:actions**

| Name                        | Description                                                  |
| --------------------------- | ------------------------------------------------------------ |
| `create()` | Creates Magic URL Session. |
| `complete()` | Validates and completes Magic URL Session. |

#### Example 

```svelte
<script>
    import { MagicURL } from "metawrite";

    const userId = "32h2hj24h2"
    let email = ""
    const url = "http://localhost:3000/page-to-complete"

	const successCreate = (e) => {
		console.log(e)
	}
	const failureCreate = (e) => {
		console.log(e)
	}
	const successComplete = (e) => {
		console.log(e)
	}
	const failureComplete = (e) => {
		console.log(e)
	}
</script>

<MagicURL let:actions on:successCreate on:successComplete on:failureCreate on:failureComplete>
		<input type="email" name="email" placeholder="Email" bind:value={email} />
		<button on:click={actions.create(userId, email, url)}>Send login link</button>
		<button on:click={actions.complete()}>Confirm Login</button>
</MagicURL>
```

-->

{#if $active}
	<slot {actions} />
	{#if complete}
		{#await complete()}
			<slot name="loading" />
		{:then user}
			<slot name="success" {user} />
		{:catch error}
			<slot name="error" {error} />
		{/await}
	{/if}
{/if}

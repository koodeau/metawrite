<script>
	/**
	 * @slot {{
	 * actions: {
	 *  create: (url: string) => Promise<any>;
	 *  update: () => Promise<any>;
	 * }
	 * }}
	 */
	import { createEventDispatcher } from 'svelte';
	import { active } from '../stores';
	import { SDK as Appwrite } from '../appwrite';

	const href = window.location.href;
	const url = new URL(href);
	const search = url.searchParams;
	const userId = search.get('userId');
	const secret = search.get('secret');

	const dispatch = createEventDispatcher();
	const actions = {
		create: async (/** @type {string} */ url) => {
			try {
				const response = await Appwrite.sdk.account.createVerification(url);
				dispatch('success', response);
				return response;
			} catch (error) {
				dispatch('failure', error);
			}
		},
		update: async () => {
			try {
				const response = await Appwrite.sdk.account.updateVerification(userId, secret);
				dispatch('success', response);
				return response;
			} catch (error) {
				dispatch('failure', error);
			}
		}
	};
</script>


{#if $active}
    <slot {actions} />
{/if}

<!-- 
  @component
  Creates and automatically validates user email verification.
  
  - `url` of type string for action `create` should be where your app is hosted or `localhost`.
  - For `update` action you don't need to pass anything, the process is automated.

### `<Verification />`

#### Directives

**let:actions**
| Name | Description |
| --- | --- |
| `create(url)` | Create Verification. `url` is what URL used to create verification link sent to your email inbox. `@type - {string}` |
| `update(user, secret)` | Complete Verification. `user` and `secret` are set automatically by `metawrite`. |

#### Events

- **on:successCreate** On `create` success.
- **on:failureCreate** On `create` failure.
- **on:successComplete** On `complete` success.
- **on:failureComplete** On `complete` failure.

#### Example

```svelte
<script>
    import { Verification } from "metawrite"

    const url = window.location.href;
</script>

<Verification let:actions>
    <button on:click={actions.create(url)}></button>
    <button on:click={actions.update()}>Update email verification status</button>
</Verification>
```
  -->
<script>
	/**
	 * @slot {{
	 * actions: {
	 *  create: () => Promise<any>;
	 * }
	 * }}
	 */
	import { createEventDispatcher } from 'svelte';
	import { active } from '../stores';

	import { Appwrite as SDK } from 'appwrite';

	export const Appwrite = {
		sdk: new SDK(),
		setConfig: (/** @type {{ endpoint: string; project: string; locale?: string; }} */ config) => {
			Appwrite.sdk.setEndpoint(config.endpoint).setProject(config.project).setLocale(config.locale);
		}
	};

	const dispatch = createEventDispatcher();
	const actions = {
		create: async () => {
			try {
				const response = await Appwrite.sdk.account.createJWT();
				dispatch('success', response);
				return response;
			} catch (error) {
				dispatch('failure', error);
			}
		}
	};
</script>

<!--
  @component

  Creates JWT token.

### `<CreateJWT />`

#### Directives

**let:actions**

| Name                        | Description                                                  |
| --------------------------- | ------------------------------------------------------------ |
| `create()` | Creates JWT token. |

#### Example

```svelte
<script>
    import { CreateJWT } from "metawrite";
</script>

<CreateJWT let:actions>
    <button on:click={actions.create}>Create JWT token</button>
</CreateJWT>
```

  -->

{#if $active}
	<slot {actions} />
{/if}

<script>
	/**
	 * @slot {{
	 * actions: {
	 *  reload: () => Promise<void>;
	 *  update: (prefs: object) => Promise<object>;
	 * }
	 * }}
	 * @slot {{ error: object }} error
	 */
	import { createEventDispatcher } from 'svelte';
	import { active } from '../_stores';
	import { SDK as Appwrite } from '../_appwrite';

	const dispatch = createEventDispatcher();
	const fetchPreferences = async () => {
		try {
			const response = await Appwrite.sdk.account.getPrefs();
			dispatch('success', response);
		} catch (error) {
			dispatch('failure', error);
			throw error;
		}
	};

	const actions = {
		reload: () => (request = fetchPreferences()),
		update: async (/** @type {object} */ prefs) => {
			try {
				const response = await Appwrite.sdk.account.updatePrefs(prefs);
				dispatch('successUpdate', response);
				return response;
			} catch (error) {
				dispatch('failureUpdate', error);
				throw error;
			}
		}
	};

	let request = fetchPreferences();
</script>

{#if $active}
	{#await request}
		<slot name="loading" />
	{:then prefs}
		<slot {prefs} {actions} />
	{:catch error}
		<slot name="error" {error} />
	{/await}
{/if}

<!-- 
	@component

### `<Preferences />`

#### Slots

- **loading**
- **error**

#### Directives

**let:actions**
| Name | Description |
| --- | --- |
| `reload()` | Reloads preferences. |
| `update(prefs)` | Update preferences. `prefs` - `@type - {object}` |

#### Events

- **on:success** On init and `reload` success.
- **on:failure** On init and `reload` failure.
- **on:successUpdate** On `update` success.
- **on:failureUpdate** On `update` failure.

#### Example 

```svelte
<script>
	import { Preferences } from 'metawrite';

	let prefs = {
		// You can pass only the specific settings you wish to update.
	};
</script>

<Preferences let:actions>
	<button
		on:click={() => {
			actions.update(prefs);
			actions.reload();
		}}>Update Preferences</button>
</Preferences>
```

 -->

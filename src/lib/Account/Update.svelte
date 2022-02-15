<script lang="ts">
	/**
	 * @slot {{
	 * actions: {
	 *  name: (name: string) => Promise<object>;
	 *  email: (email: string, password: string) => Promise<object>;
	 *  password: (password: string, oldPassword: string) => Promise<object>;
	 * }
	 * }}
	 */
	import { createEventDispatcher } from 'svelte';
	import { active } from '../_stores';
	import { SDK as Appwrite } from '../_appwrite';

	const dispatch = createEventDispatcher();
	const actions = {
		name: async (name: string) => {
			try {
				const response = await Appwrite.sdk.account.updateName(name);
				dispatch('successName', response);
				return response;
			} catch (error) {
				dispatch('failureName', error);
				throw error;
			}
		},
		email: async (email: string, password: string) => {
			try {
				const response = await Appwrite.sdk.account.updateEmail(email, password);
				dispatch('successEmail', response);
				return response;
			} catch (error) {
				dispatch('failureEmail', error);
				throw error;
			}
		},
		password: async (password: string, oldPassword: string) => {
			try {
				const response = await Appwrite.sdk.account.updatePassword(password, oldPassword);
				dispatch('successPassword', response);
				return response;
			} catch (error) {
				dispatch('failurePassword', error);
				throw error;
			}
		}
	};
</script>

{#if $active}
	<slot {actions} />
{/if}

<!-- 
	@component
	
### `<Update />`

#### Directives

**let:actions**
| Name | Description |
| --- | --- |
| `name(name)` | Update name. All fields are required. `@type - {string}` |
| `email(email, password)` | Update email. All fields are required. `@type - {string}` |
| `password(password, oldPassword)` | Update password. All fields are required. `@type - {string}` |

#### Events

- **on:successName** On `name` success.
- **on:failureName** On `name` failure.
- **on:successEmail** On `email` success.
- **on:failureEmail** On `email` failure.
- **on:successPassword** On `password` success.
- **on:failurePassword** On `password` failure.

#### Example 

```svelte
<script>
    import { Update } from "metawrite"

    let name, email, password, newPassword, oldPassword = ""
</script>

<Update let:actions>
    <button on:click={actions.name(name)}>This updates name</button>
    <button on:click={actions.email(email, password)}>This updates email</button>
    <button on:click={actions.password(newPassword, oldPassword)}>This updates password</button>
</Update>
```
	
 -->

<script>
	/**
	 * @typedef {{
	 * $id: string,
	 * email: string,
	 * emailVerification: boolean,
	 * name: string,
	 * registration: number,
	 * status: number,
	 * prefs: object
	 * }} AppwriteUser
	 */

	/**
	 * @slot {{
	 * user: AppwriteUser;
	 * actions: {
	 *  reload: () => void;
	 *  get: () => void;
	 *  logout: () => Promise<object>;
	 *  logoutFrom: (session: string) => Promise<object>;
	 *  logoutAll: () => Promise<object>;
	 * }
	 * }}
	 *
	 */
	// @slot {{ error: object }} error

	import { createEventDispatcher } from 'svelte';
	import { active, currentUser } from '../_stores';
	import { SDK as Appwrite } from '../_appwrite';

	const dispatch = createEventDispatcher();

	const fetchUser = async () => {
		try {
			await currentUser.reload();
			dispatch('success', $currentUser);
			return $currentUser;
		} catch (error) {
			dispatch('failure', error);
			throw error;
		}
	};

	const actions = {
		reload: () => (request = fetchUser()),
		get: async () => {
			try {
				const response = await Appwrite.sdk.account.get();
				dispatch('success', response);
				return response;
			} catch (error) {
				dispatch('failure', error);
			}
		},
		logout: async () => {
			try {
				const response = await Appwrite.sdk.account.deleteSession('current');
				actions.reload();
				dispatch('successLogout', response);
			} catch (error) {
				dispatch('failureLogout', error);
				throw error;
			}
		},
		logoutFrom: async (/** @type {string} */ session) => {
			try {
				const response = await Appwrite.sdk.account.deleteSession(session);
				actions.reload();
				dispatch('successLogoutFrom', response);
			} catch (error) {
				dispatch('failureLogoutFrom', error);
				throw error;
			}
		},
		logoutAll: async () => {
			try {
				const response = await Appwrite.sdk.account.deleteSessions();
				actions.reload();
				dispatch('successLogoutAll', response);
			} catch (error) {
				dispatch('failureLogoutAll', error);
				throw error;
			}
		}
	};

	let request = fetchUser();
</script>

{#if $active}
	{#if $currentUser}
		<slot user={$currentUser} {actions} />
	{:else}
		{#await request}
			<slot name="loading" />
		{:catch error}
			<slot name="error" {error} />
		{/await}
	{/if}
{/if}

<!-- 
  @component
  
  ### `<User />`

#### Slots

- **loading**
- **error**

#### Directives

**let:actions**
| Name | Description |
| --- | --- |
| `reload()` | Reload. |
| `logout()` | Logout current session. |
| `logoutAll()` | Logout from all session. |
| `logoutFrom(session)` | Logout from specific session. `session` is `@type - {string}` |

- **let:user** `object`
- **let:error**

#### Events

- **on:success** On user fetch success.
- **on:failure** On user fetch failure.
- **on:successLogout** On `logout` success.
- **on:failureLogout** On `logout` failure.
- **on:successLogoutFrom** On `logoutFrom` success.
- **on:failureLogoutFrom** On `logoutFrom` failure.
- **on:successLogoutAll** On `logoutAll` success.
- **on:failureLogoutAll** On `logoutAll` failure.

#### Example

```svelte
<script>
    import { User } from "metawrite"
</script>

<User let:actions let:user>
    <button on:click={actions.reload()}>Reload user data</button>
    <button on:click={actions.get()}>Get logged in user data</button>
    <button on:click={actions.logout()}>Log out from current session</button>
    <button on:click={actions.logoutFrom("sessionId")}>Log out from specific session</button>
    <button on:click={actions.logoutAll()}>Log out from all sessions</button>

    <!-- If logged in --\>
    <p>Hi, {user.name}</p>
</User>
```

 -->

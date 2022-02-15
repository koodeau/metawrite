<script>
	/**
	 * @slot {{
	 * actions: {
	 *  recover: (email: string, url: string) => Promise<void>;
	 *  complete: (user: string, secret: string, password: string, passwordAgain: string) => Promise<void>;
	 * }
	 * }}
	 */
	import { createEventDispatcher } from 'svelte';
	import { active } from '../_stores';
	import { SDK as Appwrite } from '../_appwrite';

	const href = window.location.href;
	const url = new URL(href);
	const search = url.searchParams;
	const userId = search.get('userId');
	const secret = search.get('secret');

	const dispatch = createEventDispatcher();
	const actions = {
		recover: async (/** @type {string} */ email, /** @type {string} */ url) => {
			try {
				const response = await Appwrite.sdk.account.createRecovery(email, url);
				dispatch('successRecover', response);
			} catch (error) {
				dispatch('failureRecover', error);
				throw error;
			}
		},
		complete: async (/** @type {string} */ password, /** @type {string} */ passwordAgain) => {
			try {
				const response = await Appwrite.sdk.account.updateRecovery(
					userId,
					secret,
					password,
					passwordAgain
				);
				dispatch('successComplete', response);
			} catch (error) {
				dispatch('failureComplete', error);
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
	
### `<RecoverPassword />`

#### Directives

**let:actions**
| Name | Description |
| --- | --- |
| `recover(email, url)` | Recover password. `email` and `url` is required and `@type - {string}`. `url` is your page where you will handle `secret` with `complete` function. |
| `complete(user, secret, password, passwordAgain)` | Complete password recovery. `user` and `secret` are set automatically by `metawrite`, so you don’t have to set them. `password` and `passwordAgain` are required - `@type - {string}`. |

#### Events

- **on:successRecover** On init and `reload` success.
- **on:failureRecover** On init and `reload` failure.
- **on:successComplete** On `update` success.
- **on:failureComplete** On `update` failure.

#### Example

#### Example

```svelte
<script>
    import { RecoverPassword } from "metawrite";

    const url = "http://localhost:3000/reset-password"; // URL that will point to the next step.
    let email = '';
	
	let password, passwordAgain = '';

    const successComplete = e => {
    //success callback
    // `e` contains the user object
  };

  const failureComplete = e => {
    //failure callback
  }

    const successRecover = e => {
    //success callback
    // `e` contains the user object
  };

  const failureRecover = e => {
    //failure callback
  }
</script>

<!-- localhost/forgot-password --\>
<RecoverPassword let:actions on:successRecover on:failureRecover>
    <input name="email" type="text" bind:value={email, url} placeholder="Email" />
    <button on:click{actions.recover(email)}>Recover Password</button>
</RecoverPassword>

<!-- Then on localhost/reset-password  --\>

<RecoverPassword let:actions on:successComplete on:failureComplete>
    <input type="password" name="password" bind:value{password} placeholder="Password" />
    <input type="password" name="password" bind:value{passwordAgain} placeholder="Confirm Password" />
    <button on:click{actions.complete(password, passwordAgain)}>Set New Password</button>
</RecoverPassword>
```
	
 -->

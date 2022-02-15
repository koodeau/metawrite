<script>
	/**
	 * @slot {{
	 * actions: {
	 *  create: (userId?: string, email: string, password: string, name?: string) => Promise<object>;
	 * }
	 * }}
	 */
	import { createEventDispatcher } from 'svelte';
	import { active } from '../_stores';
	import { SDK as Appwrite } from '../_appwrite';

	const dispatch = createEventDispatcher();
	const actions = {
		create: async (
			/** @type {string} */ userId,
			/** @type {string} */ email,
			/** @type {string} */ password,
			name = ''
		) => {
			try {
				const response = await Appwrite.sdk.account.create(userId, email, password, name);
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

## Create user

Registers a new account.

```svelte
<script>
  import { Create } from "metawrite";

  let email = "";
  let password = "";
  let name = "";

  const success = e => {
    //success callback
    // `e` contains the user object
  };

  const failure = e => {
    //failure callback
  }
</script>

<Create let:actions on:success on:failure>
  <input type="text" bind:value={email}>
  <input type="password" bind:value={password}>
  <input type="text" bind:value={name}>
  <button on:click={actions.create(email,password, name)}>Register</button>
</Create>
```

### Directives

**let:actions** `object`

Object with function.

#### Arguments
| Name | Description |
| --- | --- |
| `create(email, password, name)` | Registers a new user.  `@type - {string}` |

### Events

**on:success**

Triggers on successful register.

#### Arguments
| Name | Description |
| --- | --- |
| `response` | Response |

**on:failure**

Triggers on failed register.

#### Arguments
| Name | Description |
| --- | --- |
| `response` | Response |

-->

{#if $active}
	<slot {actions} />
{/if}

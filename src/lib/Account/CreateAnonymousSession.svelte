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
	import { SDK as Appwrite } from '../appwrite';

	const dispatch = createEventDispatcher();
	const actions = {
		create: async () => {
			try {
				const response = await Appwrite.sdk.account.createAnonymousSession();
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

### `<CreateAnonymousSession />`

#### Directives

**let:actions**

| Name                        | Description                                                  |
| --------------------------- | ------------------------------------------------------------ |
| `create()` | Creates anonymous session. |

#### Example

```svelte
<script>
    import { CreateAnonymousSession } from "metawrite";
</script>

<CreateAnonymousSession let:actions>
    <button on:click={actions.create}>Create Anonymous Session</button>
</CreateAnonymousSession>
```

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

### `<MagicURL />`

#### Directives

**let:actions**

| Name                        | Description                                                  |
| --------------------------- | ------------------------------------------------------------ |
| `create()` | Creates Magic URL Session. |

#### Example 

```svelte
<script>
    import { MagicURL } from "metawrite";

    const userId = "32h2hj24h2"
    const email = "user@example.com"
    const url = "http://example.com" // optional
</script>

<MagicURL let:actions>
    <button on:click={actions.create(userId, email, url)}>Create MagicURL</button>
</MagicURL>
```

-->

{#if $active}
	<slot {actions} />
{/if}

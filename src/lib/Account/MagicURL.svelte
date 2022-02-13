<script>
  /**
   * @slot {{
   * actions: {
   *  create: (userId: string, email: string, url?: string) => Promise<any>;
   * }
   * }}
   */
  import { createEventDispatcher } from "svelte";
  import { active } from "../stores";
  import { SDK as Appwrite } from "../appwrite";

  const dispatch = createEventDispatcher();
  const actions = {
    create: async (/** @type {string} */ userId, /** @type {string} */ email, url = "") => {
      try {
        const response = await Appwrite.sdk.account.createMagicURLSession(userId, email, url);
        dispatch("success", response);
        return response;
      } catch (error) {
        dispatch("failure", error);
      }
    },
  };
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

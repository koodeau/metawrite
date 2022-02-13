<script>
    /**
     * @slot {{
     * actions: {
     *  delete: () => Promise<any>;
     * }
     * }}
     */
    import { createEventDispatcher } from "svelte";
    import { active } from "../stores";
    import { SDK as Appwrite } from "../appwrite";
  
    const dispatch = createEventDispatcher();
    const actions = {
      delete: async () => {
        try {
          const response = await Appwrite.sdk.account.delete();
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

  Deletes currently logged in user's account.

  ### `<Delete />`

#### Directives

**let:actions**
| Name | Description |
| --- | --- |
| `delete()` | Deletes currently logged in user. |

#### Events

- **on:success** On `delete` success.
- **on:failure** On `delete` failure.

#### Example

```svelte
<script>
    import { Delete } from "metawrite";

    const success = e => {
    //success callback
    // `e` contains the user object
  };

  const failure = e => {
    //failure callback
  }
</script>

<Delete let:actions on:success on:failure>
    <button on:click={actions.delete}>Delete my account</button>
</Delete>
```


  > Account is only getting blocked to prevent someone using same credentials to sign up.
  -->
  
  {#if $active}
    <slot {actions} />
  {/if}
  
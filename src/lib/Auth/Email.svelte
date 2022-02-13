<script>
  /**
   * @slot {{
   * authorize: (email: string, password: string) => Promise<object>;
   * }}
   * @slot {{ error: object }} error
   */
  import { createEventDispatcher } from "svelte";
  import { SDK as Appwrite } from "../appwrite";
  import { currentUser } from "../stores";

  const dispatch = createEventDispatcher();
  const authorize = (/** @type {string} */ email, /** @type {string} */ password) => {
    request = async () => {
      try {
        const response = await Appwrite.sdk.account.createSession(
          email,
          password
        );
        dispatch("success", response);
        // Get user in the background, causing all <User> components to re-render once the user data is loaded.
        currentUser.reload();
        return response;
      } catch (error) {
        dispatch("failure", error);
        throw error;
      }
    };
  };

  let request;
</script>

<slot {authorize} />

{#if request}
  {#await request()}
    <slot name="loading" />
  {:then user}
    <slot name="success" {user} />
  {:catch error}
    <slot name="error" {error} />
  {/await}
{/if}

<!-- 
  @component
  
### `<AuthEmail />`

#### Slots

- **loading**
- **success**
- **error**

#### Directives

- **let:authorize(email, password)**
- **let:user** 
- **let:error**

#### Events

- **on:success** On `authorize` success.
- **on:failure** On `authorize` failure.

#### Example

```svelte
<script>
    import { AuthEmail } from "metawrite";
  
    let email = "";
    let password = "";
  
    const success = e => {
      //success callback
      // `e` contains the user object
    };
  
    const failure = e => {
      //failure callback
    }
  </script>
  
  <AuthEmail let:authorize on:success on:failure>
    <input type="text" bind:value={email}>
    <input type="text" bind:value={password}>
    <button on:click={authorize(email,password)}>Login</button>
  </AuthEmail>
```
  
 -->

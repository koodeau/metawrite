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

  > Account is only getting blocked to prevent someone using same credentials to sign up.
  -->
  
  {#if $active}
    <slot {actions} />
  {/if}
  
<script>
    /**
     * @slot {{
     * actions: {
     *  create: () => Promise<any>;
     * }
     * }}
     */
    import { createEventDispatcher } from "svelte";
    import { active } from "../stores";
    import { SDK as Appwrite } from "../appwrite";
  
    const dispatch = createEventDispatcher();
    const actions = {
      create: async () => {
        try {
          const response = await Appwrite.sdk.account.createJWT();
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
  Creates JWT token.
  -->
  
  {#if $active}
    <slot {actions} />
  {/if}
  
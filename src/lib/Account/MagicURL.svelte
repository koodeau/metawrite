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
-->

{#if $active}
  <slot {actions} />
{/if}

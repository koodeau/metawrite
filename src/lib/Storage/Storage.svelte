<script>
  /**
   * @slot {{
   * actions: {
   *  create: (fileId: string, file: File, read?: string[], write?: string[]) => Promise<object>;
   * }}}
   * @slot {{ error: object }} error
   */
  import { SDK as Appwrite } from "../appwrite";

  import { createEventDispatcher } from "svelte";
  import { currentUser } from "../stores";

  const dispatch = createEventDispatcher();

  const actions = {
    create: async (
      fileId = "unique()",
      /** @type {File} */ file,
      read = [`user:${$currentUser.$id}`],
      write = [`user:${$currentUser.$id}`]
    ) => {
      try {
        dispatch("upload");
        const response = await Appwrite.sdk.storage.createFile(
          fileId,
          file,
          read,
          write
        );
        dispatch("success", response);
        return response;
      } catch (error) {
        dispatch("failure", error);
      }
    },
  };
</script>

<slot {actions} />

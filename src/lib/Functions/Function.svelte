<script>
  /**
   * @slot {{
   * executions: any;
   * actions: {
   *  reload: () => Promise<object>;
   *  create: () => Promise<object>;
   *  get: (executionId: string, functionId: string) => Promise<object>;
   * }}}
   * @slot {{ error: object }} error
   */
  import { SDK as Appwrite } from "../appwrite";

  export let functionId;
  export let data;
  export let limit = 25;
  export let offset = 0;
  export let cursor = "";
  export let cursorDirection = "";

  const fetchExecutions = () =>
    Appwrite.sdk.functions.listExecutions(functionId, limit, offset, cursor, cursorDirection);

  const actions = {
    // @ts-ignore
    reload: () => (documents = fetchExecutions()),
    create: async () => {
      const response = await Appwrite.sdk.functions.createExecution(functionId, data);
      actions.reload();
      return response;
    },
    get: async (/** @type {string} */ functionId, /** @type {string} */ executionId) => {
      return await Appwrite.sdk.functions.getExecution(functionId, executionId);
    },
  };

  let executions = fetchExecutions();
</script>

{#await executions}
  <slot name="loading" />
{:then current}
  <slot executions={current.executions} {actions} />
{:catch error}
  <slot name="error" {error} />
{/await}

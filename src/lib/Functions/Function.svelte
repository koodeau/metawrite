<script lang="ts">
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
	import { SDK as Appwrite } from '../_appwrite';

	export let functionId: string;
	export let limit = 25;
	export let offset = 0;
	export let cursor = '';
	export let cursorDirection = '';

	const fetchExecutions = () =>
		Appwrite.sdk.functions.listExecutions(functionId, limit, offset, cursor, cursorDirection);

	const actions = {
		// @ts-ignore
		reload: () => (documents = fetchExecutions()),
		create: async (functionId: string, data?: string) => {
			const response = await Appwrite.sdk.functions.createExecution(functionId, data);
			actions.reload();
			return response;
		},
		get: async (functionId: string, executionId: string) => {
			return await Appwrite.sdk.functions.getExecution(functionId, executionId);
		}
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

<!-- 
  @component
  
## Functions

The Functions service allows you to create custom behaviour that can be triggered by any supported Appwrite system events or by a predefined schedule.

Appwrite Cloud Functions lets you automatically run backend code in response to events triggered by Appwrite or by setting it to be executed in a predefined schedule. Your code is stored in a secure way on your Appwrite instance and is executed in an isolated environment.

You can learn more by following Appwrite's [Cloud Functions tutorial](https://_appwrite.io/docs/functions).

### `<Function />`

#### Directives

**let:actions**
| Name | Description |
| --- | --- |
| `reload()` | Reload. |
| `create(functionId, data)` | Creates Execution. `functionId` is *required*, `data` could be empty string because *optional*. `@type {string}`|
| `create(functionId, executionId)` | Get Execution. Both parameters are required. `@type {string}` |

- **let:executions**

#### Slots

- **error**

#### Example 

```svelte
<script>
	import { Function } from 'metawrite';
	let functionId = 'someExecution'; // required
	let newFunctionId = '';
	let data = 'String of custom data to send to function.'; // could be empty string because optional
</script>

<Function {functionId} {data} let:actions let:executions>
	{#each executions as execution}
		<p>
			Execution ID: {execution.$id}, Function ID: {execution.functionId}, Date Created: {execution.dateCreated}
		</p>
	{/each}
	<input type="text" name="functionId" placeholder="Function ID" bind:value={newFunctionId} />
	<button on:click={actions.create(newFunctionId, data)}>Create Execution</button>
</Function>
```
  
 -->

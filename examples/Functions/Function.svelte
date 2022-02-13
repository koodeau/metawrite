<script>
	import { Function } from '$lib';
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

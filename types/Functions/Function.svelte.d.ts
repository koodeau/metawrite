/** @typedef {typeof __propDef.props}  FunctionProps */
/** @typedef {typeof __propDef.events}  FunctionEvents */
/** @typedef {typeof __propDef.slots}  FunctionSlots */
/**
 * ## Functions
 *
 * The Functions service allows you to create custom behaviour that can be triggered by any supported Appwrite system events or by a predefined schedule.
 *
 * Appwrite Cloud Functions lets you automatically run backend code in response to events triggered by Appwrite or by setting it to be executed in a predefined schedule. Your code is stored in a secure way on your Appwrite instance and is executed in an isolated environment.
 *
 * You can learn more by following Appwrite's [Cloud Functions tutorial](https://appwrite.io/docs/functions).
 *
 * ### `<Function />`
 *
 * #### Directives
 *
 * **let:actions**
 * | Name | Description |
 * | --- | --- |
 * | `reload()` | Reload. |
 * | `create(functionId, data)` | Creates Execution. `functionId` is *required*, `data` could be empty string because *optional*. `@type {string}`|
 * | `create(functionId, executionId)` | Get Execution. Both parameters are required. `@type {string}` |
 *
 * - **let:executions**
 *
 * #### Slots
 *
 * - **error**
 *
 * #### Example
 *
 * ```svelte
 * <script>
 * import { Function } from 'metawrite';
 * let functionId = 'someExecution'; // required
 * let newFunctionId = '';
 * let data = 'String of custom data to send to function.'; // could be empty string because optional
 * </script>
 *
 * <Function {functionId} {data} let:actions let:executions>
 * {#each executions as execution}
 * 	<p>
 * 		Execution ID: {execution.$id}, Function ID: {execution.functionId}, Date Created: {execution.dateCreated}
 * 	</p>
 * {/each}
 * <input type="text" name="functionId" placeholder="Function ID" bind:value={newFunctionId} />
 * <button on:click={actions.create(newFunctionId, data)}>Create Execution</button>
 * </Function>
 * ```
 */
export default class Function extends SvelteComponentTyped<{
    offset?: number;
    limit?: number;
    functionId?: string;
    data?: string;
    cursor?: string;
    cursorDirection?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    loading: {};
    default: {
        executions: import("appwrite").Models.Execution[];
        actions: {
            reload: () => Promise<import("appwrite").Models.ExecutionList>;
            create: (functionId: string, data: string) => Promise<import("appwrite").Models.Execution>;
            get: (functionId: string, executionId: string) => Promise<import("appwrite").Models.Execution>;
        };
    };
    error: {
        error: any;
    };
}> {
}
export type FunctionProps = typeof __propDef.props;
export type FunctionEvents = typeof __propDef.events;
export type FunctionSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        offset?: number;
        limit?: number;
        functionId?: string;
        data?: string;
        cursor?: string;
        cursorDirection?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        loading: {};
        default: {
            executions: import("appwrite").Models.Execution[];
            actions: {
                reload: () => Promise<import("appwrite").Models.ExecutionList>;
                create: (functionId: string, data: string) => Promise<import("appwrite").Models.Execution>;
                get: (functionId: string, executionId: string) => Promise<import("appwrite").Models.Execution>;
            };
        };
        error: {
            error: any;
        };
    };
};
export {};

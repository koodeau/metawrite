/** @typedef {typeof __propDef.props}  DeleteProps */
/** @typedef {typeof __propDef.events}  DeleteEvents */
/** @typedef {typeof __propDef.slots}  DeleteSlots */
/**
 * Deletes currently logged in user's account.
 *
 * ### `<Delete />`
 *
 * #### Directives
 *
 * **let:actions**
 * | Name | Description |
 * | --- | --- |
 * | `delete()` | Deletes currently logged in user. |
 *
 * #### Events
 *
 * - **on:success** On `delete` success.
 * - **on:failure** On `delete` failure.
 *
 * #### Example
 *
 * ```svelte
 * <script>
 *   import { Delete } from "metawrite";
 *
 *   const success = e => {
 *   //success callback
 *   // `e` contains the user object
 * };
 *
 * const failure = e => {
 *   //failure callback
 * }
 * </script>
 *
 * <Delete let:actions on:success on:failure>
 *   <button on:click={actions.delete}>Delete my account</button>
 * </Delete>
 * ```
 *
 *
 * > Account is only getting blocked to prevent someone using same credentials to sign up.
 */
export default class Delete extends SvelteComponentTyped<{}, {
    success: CustomEvent<any>;
    failure: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {
        actions: {
            delete: () => Promise<{}>;
        };
    };
}> {
}
export type DeleteProps = typeof __propDef.props;
export type DeleteEvents = typeof __propDef.events;
export type DeleteSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {};
    events: {
        success: CustomEvent<any>;
        failure: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            actions: {
                delete: () => Promise<{}>;
            };
        };
    };
};
export {};

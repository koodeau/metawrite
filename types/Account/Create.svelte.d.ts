/** @typedef {typeof __propDef.props}  CreateProps */
/** @typedef {typeof __propDef.events}  CreateEvents */
/** @typedef {typeof __propDef.slots}  CreateSlots */
/**
 * ## Create user
 *
 * Registers a new account.
 *
 * ```svelte
 * <script>
 * import { Create } from "metawrite";
 *
 * let email = "";
 * let password = "";
 * let name = "";
 *
 * const success = e => {
 *   //success callback
 *   // `e` contains the user object
 * };
 *
 * const failure = e => {
 *   //failure callback
 * }
 * </script>
 *
 * <Create let:actions on:success on:failure>
 * <input type="text" bind:value={email}>
 * <input type="password" bind:value={password}>
 * <input type="text" bind:value={name}>
 * <button on:click={actions.create(email,password, name)}>Register</button>
 * </Create>
 * ```
 *
 * ### Directives
 *
 * **let:actions** `object`
 *
 * Object with function.
 *
 * #### Arguments
 * | Name | Description |
 * | --- | --- |
 * | `create(email, password, name)` | Registers a new user.  `@type - {string}` |
 *
 * ### Events
 *
 * **on:success**
 *
 * Triggers on successful register.
 *
 * #### Arguments
 * | Name | Description |
 * | --- | --- |
 * | `response` | Response |
 *
 * **on:failure**
 *
 * Triggers on failed register.
 *
 * #### Arguments
 * | Name | Description |
 * | --- | --- |
 * | `response` | Response |
 */
export default class Create extends SvelteComponentTyped<{}, {
    success: CustomEvent<any>;
    failure: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {
        actions: {
            create: (userId: string, email: string, password: string, name?: string) => Promise<import("appwrite").Models.User<import("appwrite").Models.Preferences>>;
        };
    };
}> {
}
export type CreateProps = typeof __propDef.props;
export type CreateEvents = typeof __propDef.events;
export type CreateSlots = typeof __propDef.slots;
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
                create: (userId: string, email: string, password: string, name?: string) => Promise<import("appwrite").Models.User<import("appwrite").Models.Preferences>>;
            };
        };
    };
};
export {};

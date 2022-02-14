/** @typedef {typeof __propDef.props}  UpdateProps */
/** @typedef {typeof __propDef.events}  UpdateEvents */
/** @typedef {typeof __propDef.slots}  UpdateSlots */
/**
 * ### `<Update />`
 *
 * #### Directives
 *
 * **let:actions**
 * | Name | Description |
 * | --- | --- |
 * | `name(name)` | Update name. All fields are required. `@type - {string}` |
 * | `email(email, password)` | Update email. All fields are required. `@type - {string}` |
 * | `password(password, oldPassword)` | Update password. All fields are required. `@type - {string}` |
 *
 * #### Events
 *
 * - **on:successName** On `name` success.
 * - **on:failureName** On `name` failure.
 * - **on:successEmail** On `email` success.
 * - **on:failureEmail** On `email` failure.
 * - **on:successPassword** On `password` success.
 * - **on:failurePassword** On `password` failure.
 *
 * #### Example
 *
 * ```svelte
 * <script>
 * import { Update } from "metawrite"
 *
 * let name, email, password, newPassword, oldPassword = ""
 * </script>
 *
 * <Update let:actions>
 * <button on:click={actions.name(name)}>This updates name</button>
 * <button on:click={actions.email(email, password)}>This updates email</button>
 * <button on:click={actions.password(newPassword, oldPassword)}>This updates password</button>
 * </Update>
 * ```
 */
export default class Update extends SvelteComponentTyped<{}, {
    successName: CustomEvent<any>;
    failureName: CustomEvent<any>;
    successEmail: CustomEvent<any>;
    failureEmail: CustomEvent<any>;
    successPassword: CustomEvent<any>;
    failurePassword: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {
        actions: {
            name: (name: string) => Promise<import("appwrite").Models.User<import("appwrite").Models.Preferences>>;
            email: (email: string, password: string) => Promise<import("appwrite").Models.User<import("appwrite").Models.Preferences>>;
            password: (password: string, oldPassword: string) => Promise<import("appwrite").Models.User<import("appwrite").Models.Preferences>>;
        };
    };
}> {
}
export type UpdateProps = typeof __propDef.props;
export type UpdateEvents = typeof __propDef.events;
export type UpdateSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {};
    events: {
        successName: CustomEvent<any>;
        failureName: CustomEvent<any>;
        successEmail: CustomEvent<any>;
        failureEmail: CustomEvent<any>;
        successPassword: CustomEvent<any>;
        failurePassword: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            actions: {
                name: (name: string) => Promise<import("appwrite").Models.User<import("appwrite").Models.Preferences>>;
                email: (email: string, password: string) => Promise<import("appwrite").Models.User<import("appwrite").Models.Preferences>>;
                password: (password: string, oldPassword: string) => Promise<import("appwrite").Models.User<import("appwrite").Models.Preferences>>;
            };
        };
    };
};
export {};

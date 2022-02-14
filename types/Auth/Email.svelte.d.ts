/** @typedef {typeof __propDef.props}  EmailProps */
/** @typedef {typeof __propDef.events}  EmailEvents */
/** @typedef {typeof __propDef.slots}  EmailSlots */
/**
 * ### `<AuthEmail />`
 *
 * #### Slots
 *
 * - **loading**
 * - **success**
 * - **error**
 *
 * #### Directives
 *
 * - **let:authorize(email, password)**
 * - **let:user**
 * - **let:error**
 *
 * #### Events
 *
 * - **on:success** On `authorize` success.
 * - **on:failure** On `authorize` failure.
 *
 * #### Example
 *
 * ```svelte
 * <script>
 *   import { AuthEmail } from "metawrite";
 *
 *   let email = "";
 *   let password = "";
 *
 *   const success = e => {
 *     //success callback
 *     // `e` contains the user object
 *   };
 *
 *   const failure = e => {
 *     //failure callback
 *   }
 * </script>
 *
 * <AuthEmail let:authorize on:success on:failure>
 *   <input type="text" bind:value={email}>
 *   <input type="text" bind:value={password}>
 *   <button on:click={authorize(email,password)}>Login</button>
 * </AuthEmail>
 * ```
 */
export default class Email extends SvelteComponentTyped<{}, {
    success: CustomEvent<any>;
    failure: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {
        authorize: (email: string, password: string) => void;
    };
    loading: {};
    success: {
        user: any;
    };
    error: {
        error: any;
    };
}> {
}
export type EmailProps = typeof __propDef.props;
export type EmailEvents = typeof __propDef.events;
export type EmailSlots = typeof __propDef.slots;
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
            authorize: (email: string, password: string) => void;
        };
        loading: {};
        success: {
            user: any;
        };
        error: {
            error: any;
        };
    };
};
export {};

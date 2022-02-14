/** @typedef {typeof __propDef.props}  VerificationProps */
/** @typedef {typeof __propDef.events}  VerificationEvents */
/** @typedef {typeof __propDef.slots}  VerificationSlots */
/**
 * Creates and automatically validates user email verification.
 *
 * - `url` of type string for action `create` should be where your app is hosted or `localhost`.
 * - For `update` action you don't need to pass anything, the process is automated.
 *
 * ### `<Verification />`
 *
 * #### Directives
 *
 * **let:actions**
 * | Name | Description |
 * | --- | --- |
 * | `create(url)` | Create Verification. `url` is what URL used to create verification link sent to your email inbox. `@type - {string}` |
 * | `update(user, secret)` | Complete Verification. `user` and `secret` are set automatically by `metawrite`. |
 *
 * #### Events
 *
 * - **on:successCreate** On `create` success.
 * - **on:failureCreate** On `create` failure.
 * - **on:successComplete** On `complete` success.
 * - **on:failureComplete** On `complete` failure.
 *
 * #### Example
 *
 * ```svelte
 * <script>
 *   import { Verification } from "metawrite"
 *
 *   const url = window.location.href;
 * </script>
 *
 * <Verification let:actions>
 *   <button on:click={actions.create(url)}></button>
 *   <button on:click={actions.update()}>Update email verification status</button>
 * </Verification>
 * ```
 */
export default class Verification extends SvelteComponentTyped<{}, {
    success: CustomEvent<any>;
    failure: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {
        actions: {
            create: (url: string) => Promise<import("appwrite").Models.Token>;
            update: () => Promise<import("appwrite").Models.Token>;
        };
    };
}> {
}
export type VerificationProps = typeof __propDef.props;
export type VerificationEvents = typeof __propDef.events;
export type VerificationSlots = typeof __propDef.slots;
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
                create: (url: string) => Promise<import("appwrite").Models.Token>;
                update: () => Promise<import("appwrite").Models.Token>;
            };
        };
    };
};
export {};

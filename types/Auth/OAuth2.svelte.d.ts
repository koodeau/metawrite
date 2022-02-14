/** @typedef {typeof __propDef.props}  OAuth2Props */
/** @typedef {typeof __propDef.events}  OAuth2Events */
/** @typedef {typeof __propDef.slots}  OAuth2Slots */
/**
 * ### `<AuthOAuth2 />`
 *
 * #### Properties
 * | Name | Description |
 * | --- | --- |
 * | `provider` | OAuth2 provider. `@type - {string}` |
 * | `success` | Success url. `@type - {string}` |
 * | `failure` | Failure url. `@type - {string}` |
 * |#### Directives||
 *
 * **let:authorize()**
 *
 * #### Example
 *
 * ```svelte
 * <script>
 *   import { AuthOAuth2 } from "metawrite";
 * </script>
 *
 * <AuthOAuth2
 *   provider="google"
 *   success="http://localhost:3000?success"
 *   failure="http://localhost:3000?failure"
 *   let:authorize>
 *   <button on:click={authorize}>Login Google</button>
 * </AuthOAuth2>
 * ```
 */
export default class OAuth2 extends SvelteComponentTyped<{
    provider: any;
    success: any;
    failure: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {
        authorize: () => void | URL;
    };
}> {
}
export type OAuth2Props = typeof __propDef.props;
export type OAuth2Events = typeof __propDef.events;
export type OAuth2Slots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        provider: any;
        success: any;
        failure: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            authorize: () => void | URL;
        };
    };
};
export {};

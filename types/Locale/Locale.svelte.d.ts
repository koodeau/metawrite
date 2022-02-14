/** @typedef {typeof __propDef.props}  LocaleProps */
/** @typedef {typeof __propDef.events}  LocaleEvents */
/** @typedef {typeof __propDef.slots}  LocaleSlots */
/**
 * ### `<Locale />`
 *
 * #### Slots
 *
 * - **loading**
 * - **error**
 *
 * #### Directives
 *
 * **let:actions**
 * | Name | Description |
 * | --- | --- |
 * | `reload()` | Reload. |
 *
 * - **let:code** `object`
 *
 * #### Example
 *
 * ```svelte
 * <script>
 * import { Locale } from 'metawrite';
 * </script>
 *
 * <Locale let:actions let:code>
 * <h1>Active Session</h1>
 * <button on:click={actions.reload()}>Reload</button>
 * <p>Location: {code.country}, {code.continentCode}</p>
 * <p>IP: {code.ip}</p>
 * </Locale>
 * ```
 */
export default class Locale extends SvelteComponentTyped<{}, {
    [evt: string]: CustomEvent<any>;
}, {
    loading: {};
    default: {
        code: import("appwrite").Models.Locale;
        actions: {
            reload: () => Promise<import("appwrite").Models.Locale>;
        };
    };
    error: {
        error: any;
    };
}> {
}
export type LocaleProps = typeof __propDef.props;
export type LocaleEvents = typeof __propDef.events;
export type LocaleSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {};
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        loading: {};
        default: {
            code: import("appwrite").Models.Locale;
            actions: {
                reload: () => Promise<import("appwrite").Models.Locale>;
            };
        };
        error: {
            error: any;
        };
    };
};
export {};

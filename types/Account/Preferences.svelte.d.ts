/** @typedef {typeof __propDef.props}  PreferencesProps */
/** @typedef {typeof __propDef.events}  PreferencesEvents */
/** @typedef {typeof __propDef.slots}  PreferencesSlots */
/**
 * ### `<Preferences />`
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
 * | `reload()` | Reloads preferences. |
 * | `update(prefs)` | Update preferences. `prefs` - `@type - {object}` |
 *
 * #### Events
 *
 * - **on:success** On init and `reload` success.
 * - **on:failure** On init and `reload` failure.
 * - **on:successUpdate** On `update` success.
 * - **on:failureUpdate** On `update` failure.
 *
 * #### Example
 *
 * ```svelte
 * <script>
 * import { Preferences } from 'metawrite';
 *
 * let prefs = {
 * 	// You can pass only the specific settings you wish to update.
 * };
 * </script>
 *
 * <Preferences let:actions>
 * <button
 * 	on:click={() => {
 * 		actions.update(prefs);
 * 		actions.reload();
 * 	}}>Update Preferences</button>
 * </Preferences>
 * ```
 */
export default class Preferences extends SvelteComponentTyped<{}, {
    success: CustomEvent<any>;
    failure: CustomEvent<any>;
    successUpdate: CustomEvent<any>;
    failureUpdate: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    loading: {};
    default: {
        prefs: void;
        actions: {
            reload: () => Promise<void>;
            update: (prefs: any) => Promise<import("appwrite").Models.User<import("appwrite").Models.Preferences>>;
        };
    };
    error: {
        error: any;
    };
}> {
}
export type PreferencesProps = typeof __propDef.props;
export type PreferencesEvents = typeof __propDef.events;
export type PreferencesSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {};
    events: {
        success: CustomEvent<any>;
        failure: CustomEvent<any>;
        successUpdate: CustomEvent<any>;
        failureUpdate: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        loading: {};
        default: {
            prefs: void;
            actions: {
                reload: () => Promise<void>;
                update: (prefs: object) => Promise<import("appwrite").Models.User<import("appwrite").Models.Preferences>>;
            };
        };
        error: {
            error: any;
        };
    };
};
export {};

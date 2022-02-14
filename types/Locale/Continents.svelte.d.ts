/** @typedef {typeof __propDef.props}  ContinentsProps */
/** @typedef {typeof __propDef.events}  ContinentsEvents */
/** @typedef {typeof __propDef.slots}  ContinentsSlots */
/**
 * ### `<Continents />`
 *
 * #### Directives
 *
 * **let:actions**
 * | Name | Description |
 * | --- | --- |
 * | `reload()` | Reload. |
 *
 * - **let:continents**
 *
 * #### Slots
 *
 * - **loading**
 * - **error**
 *
 * #### Example
 *
 * ```svelte
 * <script>
 * import { Continents } from "metawrite"
 * </script>
 *
 * <Continents let:actions let:continents>
 * <button on:click={actions.reload()}>Reload</button>
 * <p>There are {continents.sum} continents:</p>
 * {#each continents.continents as continent}
 *     <p>{continent.name}, {continent.code}</p>
 * {/each}
 * </Continents>
 * ```
 */
export default class Continents extends SvelteComponentTyped<{}, {
    [evt: string]: CustomEvent<any>;
}, {
    loading: {};
    default: {
        continents: import("appwrite").Models.ContinentList;
        actions: {
            reload: () => Promise<import("appwrite").Models.ContinentList>;
        };
    };
    error: {
        error: any;
    };
}> {
}
export type ContinentsProps = typeof __propDef.props;
export type ContinentsEvents = typeof __propDef.events;
export type ContinentsSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {};
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        loading: {};
        default: {
            continents: import("appwrite").Models.ContinentList;
            actions: {
                reload: () => Promise<import("appwrite").Models.ContinentList>;
            };
        };
        error: {
            error: any;
        };
    };
};
export {};

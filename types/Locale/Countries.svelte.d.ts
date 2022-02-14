/** @typedef {typeof __propDef.props}  CountriesProps */
/** @typedef {typeof __propDef.events}  CountriesEvents */
/** @typedef {typeof __propDef.slots}  CountriesSlots */
/**
 * ### `<Countries />`
 *
 * #### Arguments
 *
 * - eu
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
 * - **let:countries**
 *
 * #### Example
 *
 * ```svelte
 * <script>
 * import { Countries } from "metawrite"
 *
 * let eu = true; // if you want to list only EU countries
 * </script>
 *
 * <Countries let:actions let:countries>
 * <button on:click={actions.reload()}>Reload</button>
 * <p>There are {countries.sum} countries in the world:</p>
 * {#each countries.countries as country}
 *     <p>{country.name}, {country.code}</p>
 * {/each}
 * </Countries>
 *
 * <Countries {eu} let:actions let:countries>
 * <button on:click={actions.reload()}>Reload</button>
 * <p>There are {countries.sum} countries in EU:</p>
 * {#each countries.countries as country}
 *     <p>{country.name}, {country.code}</p>
 * {/each}
 * </Countries>
 * ```
 */
export default class Countries extends SvelteComponentTyped<{
    eu?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    loading: {};
    default: {
        countries: import("appwrite").Models.CountryList;
        actions: {
            reload: () => Promise<import("appwrite").Models.CountryList>;
        };
    };
    error: {
        error: any;
    };
}> {
}
export type CountriesProps = typeof __propDef.props;
export type CountriesEvents = typeof __propDef.events;
export type CountriesSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        eu?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        loading: {};
        default: {
            countries: import("appwrite").Models.CountryList;
            actions: {
                reload: () => Promise<import("appwrite").Models.CountryList>;
            };
        };
        error: {
            error: any;
        };
    };
};
export {};

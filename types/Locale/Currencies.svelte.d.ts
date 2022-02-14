/** @typedef {typeof __propDef.props}  CurrenciesProps */
/** @typedef {typeof __propDef.events}  CurrenciesEvents */
/** @typedef {typeof __propDef.slots}  CurrenciesSlots */
/**
 * ### `<Currencies />`
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
 * - **let:currencies**
 *
 * #### Example
 *
 * ```svelte
 * <script>
 * import { Currencies } from "metawrite"
 * </script>
 *
 * <Currencies let:actions let:currencies>
 * <button on:click={actions.reload()}>Reload</button>
 * <p>There are {currencies.sum} currencies:</p>
 * {#each currencies.currencies as currency}
 *     <p>{currency.symbol} - {currency.name} ({currency.code})</p>
 * {/each}
 * </Currencies>
 * ```
 */
export default class Currencies extends SvelteComponentTyped<{}, {
    [evt: string]: CustomEvent<any>;
}, {
    loading: {};
    default: {
        currencies: import("appwrite").Models.CurrencyList;
        actions: {
            reload: () => Promise<import("appwrite").Models.CurrencyList>;
        };
    };
    error: {
        error: any;
    };
}> {
}
export type CurrenciesProps = typeof __propDef.props;
export type CurrenciesEvents = typeof __propDef.events;
export type CurrenciesSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {};
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        loading: {};
        default: {
            currencies: import("appwrite").Models.CurrencyList;
            actions: {
                reload: () => Promise<import("appwrite").Models.CurrencyList>;
            };
        };
        error: {
            error: any;
        };
    };
};
export {};

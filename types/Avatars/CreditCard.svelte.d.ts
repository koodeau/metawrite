/** @typedef {typeof __propDef.props}  CreditCardProps */
/** @typedef {typeof __propDef.events}  CreditCardEvents */
/** @typedef {typeof __propDef.slots}  CreditCardSlots */
/**
 * ### `<CreditCard />`
 *
 * #### Arguments
 *
 * - code - *required* `@type - {string}`
 * - width - *optional* `@type - {number}`
 * - height - *optional* `@type - {string}`
 * - quality - *optional* `@type - {string}`
 *
 * #### Directives
 *
 * - **let:src** Image link `@type - {URL}`
 *
 * #### Example
 *
 * ```svelte
 * <script>
 * import { CreditCard } from "metawrite"
 * </script>
 *
 * <CreditCard code="amex" let:src>
 * <img src={String(src)} alt="card" />
 * </CreditCard>
 * ```
 */
export default class CreditCard extends SvelteComponentTyped<{
    code: any;
    width?: number;
    height?: number;
    quality?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {
        src: URL;
    };
}> {
}
export type CreditCardProps = typeof __propDef.props;
export type CreditCardEvents = typeof __propDef.events;
export type CreditCardSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        code: any;
        width?: number;
        height?: number;
        quality?: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            src: URL;
        };
    };
};
export {};

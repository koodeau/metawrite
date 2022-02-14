/** @typedef {typeof __propDef.props}  BrowserProps */
/** @typedef {typeof __propDef.events}  BrowserEvents */
/** @typedef {typeof __propDef.slots}  BrowserSlots */
/**
 * ### `<Browser />`
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
 * import { Browser } from "metawrite"
 * </script>
 *
 * <Browser code="firefox" let:src>
 * <img src={String(src)} alt="Browser" />
 * </Browser>
 * ```
 */
export default class Browser extends SvelteComponentTyped<{
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
export type BrowserProps = typeof __propDef.props;
export type BrowserEvents = typeof __propDef.events;
export type BrowserSlots = typeof __propDef.slots;
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

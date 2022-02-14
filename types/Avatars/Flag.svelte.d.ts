/** @typedef {typeof __propDef.props}  FlagProps */
/** @typedef {typeof __propDef.events}  FlagEvents */
/** @typedef {typeof __propDef.slots}  FlagSlots */
/**
 * ### `<Flag />`
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
 * import { Flag } from "metawrite"
 * </script>
 *
 * <Flag code="canada" let:src>
 * <img src={String(src)} alt="flag" />
 * </Flag>
 * ```
 */
export default class Flag extends SvelteComponentTyped<{
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
export type FlagProps = typeof __propDef.props;
export type FlagEvents = typeof __propDef.events;
export type FlagSlots = typeof __propDef.slots;
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

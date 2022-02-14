/** @typedef {typeof __propDef.props}  FaviconProps */
/** @typedef {typeof __propDef.events}  FaviconEvents */
/** @typedef {typeof __propDef.slots}  FaviconSlots */
/**
 * ### `<Favicon />`
 *
 * #### Arguments
 *
 * - url - *required* `@type - {string}`
 *
 * #### Directives
 *
 * - **let:src** Image link `@type - {URL}`
 *
 * ```svelte
 * <script>
 * import { Favicon } from "metawrite"
 * const url = window.location.href;
 * </script>
 *
 * <Favicon {url} let:src>
 * <img src={String(src)} alt="favicon" />
 * </Favicon>
 * ```
 */
export default class Favicon extends SvelteComponentTyped<{
    url: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {
        src: URL;
    };
}> {
}
export type FaviconProps = typeof __propDef.props;
export type FaviconEvents = typeof __propDef.events;
export type FaviconSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        url: any;
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

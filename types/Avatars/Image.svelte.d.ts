/** @typedef {typeof __propDef.props}  ImageProps */
/** @typedef {typeof __propDef.events}  ImageEvents */
/** @typedef {typeof __propDef.slots}  ImageSlots */
/**
 * ### `<Image />`
 *
 * #### Arguments
 *
 * - url - *required* `@type - {string}`
 * - width - *optional* `@type - {number}`
 * - height - *optional* `@type - {number}`
 *
 * #### Directives
 *
 * - **let:src** Image link `@type - {URL}`
 *
 * #### Example
 *
 * ```svelte
 * <script>
 * import { Image } from "metawrite";
 *
 * let url = "https://increas.io/";
 * let width, height = 100;
 * </script>
 *
 * <Image {url} {width} {height} let:src>
 * <img src={String(src)} alt="someImage" />
 * </Image>
 * ```
 */
export default class Image extends SvelteComponentTyped<{
    width: any;
    height: any;
    url?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {
        src: URL;
    };
}> {
}
export type ImageProps = typeof __propDef.props;
export type ImageEvents = typeof __propDef.events;
export type ImageSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        width: any;
        height: any;
        url?: string;
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

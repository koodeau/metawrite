/** @typedef {typeof __propDef.props}  QrProps */
/** @typedef {typeof __propDef.events}  QrEvents */
/** @typedef {typeof __propDef.slots}  QrSlots */
/**
 * ### `<QR />`
 *
 * #### Arguments
 *
 * - text - *required* `@type - {string}`
 * - size - *optional* `@type - {optional}`
 * - margin - *optional* `@type - {number}`
 * - download - *optional* `@type - {boolean}`
 *
 * #### Directives
 *
 * - **let:src** Image link `@type - {URL}`
 *
 * #### Example
 *
 * ```svelte
 * <script>
 * import { QR } from 'metawrite';
 *
 * let text = 'https://increas.io/'; // could be any text
 * let size = 500;
 * let margin = 1;
 * let download = false;
 * </script>
 *
 * <QR {text} {size} {margin} {download} let:src>
 * <img src={String(src)} alt="QR Code" />
 * </QR>
 *
 * ```
 */
export default class Qr extends SvelteComponentTyped<{
    text: any;
    size?: number;
    margin?: number;
    download?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {
        src: URL;
    };
}> {
}
export type QrProps = typeof __propDef.props;
export type QrEvents = typeof __propDef.events;
export type QrSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        text: any;
        size?: number;
        margin?: number;
        download?: boolean;
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

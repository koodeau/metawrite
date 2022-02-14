/** @typedef {typeof __propDef.props}  CollectionProps */
/** @typedef {typeof __propDef.events}  CollectionEvents */
/** @typedef {typeof __propDef.slots}  CollectionSlots */
/**
 * ### `<Collection />`
 *
 * #### Arguments
 *
 * - collectionId - *required* `@type - {string}`
 *
 * - Cache - *optional*, by default set to false `@type - {boolean}`
 *
 * **query: `@type - {object}`**
 *
 * - filters - *optional* `@type - {string[]}`
 *
 * - offset - *optional* `@type - {number}`
 *
 * - limit - *optional* `@type - {number}`
 *
 * - orderField - *optional* `@type - {string}`
 *
 * - orderType - *optional* `@type - {string}`
 *
 * - orderCast - *optional* `@type - {string[]}`
 *
 * - search - *optional* `@type - {string[]}`
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
 * | `create(data, read, write)` | Creates a Document. `data` - `@type - {string}`.<br /> `read`/`write` is optional `@type - {string[]}` |
 *
 * - **let:documents**
 * - **let:error**
 *
 * #### Example
 *
 * ```svelte
 * <script>
 * import { Collection } from "metawrite";
 * </script>
 *
 * <Collection collectionId="5f56a3035a01f" let:documents>
 * You have {documents.length} documents.
 * </Collection>
 * ```
 */
export default class Collection extends SvelteComponentTyped<{
    collectionId: string;
    search?: any[];
    filters?: string[];
    offset?: number;
    limit?: number;
    orderField?: string;
    orderType?: string;
    orderCast?: any[];
    cache?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    loading: {};
    default: {
        documents: any[];
        actions: {
            reload: () => void;
            create: (data?: string, read?: string[], write?: string[]) => Promise<import("appwrite").Models.Document>;
        };
    };
    error: {
        error: any;
    };
}> {
}
export type CollectionProps = typeof __propDef.props;
export type CollectionEvents = typeof __propDef.events;
export type CollectionSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        collectionId: string;
        search?: any[];
        filters?: string[];
        offset?: number;
        limit?: number;
        orderField?: string;
        orderType?: string;
        orderCast?: any[];
        cache?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        loading: {};
        default: {
            documents: any[];
            actions: {
                reload: () => void;
                create: (data?: string, read?: string[], write?: string[]) => Promise<import("appwrite").Models.Document>;
            };
        };
        error: {
            error: any;
        };
    };
};
export {};

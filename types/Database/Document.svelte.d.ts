/** @typedef {typeof __propDef.props}  DocumentProps */
/** @typedef {typeof __propDef.events}  DocumentEvents */
/** @typedef {typeof __propDef.slots}  DocumentSlots */
/**
 * ### `<Document />`
 *
 * #### Arguments
 *
 * - documentId - *required* `@type - {string}`
 * - collectionId - *required* `@type - {string}`
 * - document - `Promise<any>`
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
 * | `update(data)` | Updates a Document. `data` - `@type - {object}` |
 * | `remove()` | Removes a Document. |
 *
 * - **let:document**
 * - **let:error**
 *
 * #### Example
 *
 * ```svelte
 * <script>
 * import { Collection, Document } from 'metawrite';
 *
 * const collectionId = '5f56a3035a01f';
 * </script>
 *
 * <Collection {collectionId} let:documents>
 * You have {documents.length} documents:
 * {#each documents as document}
 * 	<Document {collectionId} documentId={document.$id} {document}>
 * 		Title: {document.title}
 * 		Text: {document.text}
 * 	</Document>
 * {/each}
 * </Collection>
 * ```
 */
export default class Document extends SvelteComponentTyped<{
    collectionId: string;
    documentId: string;
    document: any;
    cache?: boolean;
}, {
    change: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    loading: {};
    default: {
        actions: {
            reload: () => void;
            update: (data: any) => Promise<import("appwrite").Models.Document>;
            remove: () => Promise<{}>;
        };
    };
    error: {
        error: any;
    };
}> {
}
export type DocumentProps = typeof __propDef.props;
export type DocumentEvents = typeof __propDef.events;
export type DocumentSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        collectionId: string;
        documentId: string;
        document: any;
        cache?: boolean;
    };
    events: {
        change: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        loading: {};
        default: {
            actions: {
                reload: () => void;
                update: (data: object) => Promise<import("appwrite").Models.Document>;
                remove: () => Promise<{}>;
            };
        };
        error: {
            error: any;
        };
    };
};
export {};

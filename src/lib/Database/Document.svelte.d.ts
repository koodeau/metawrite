import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        /**
             * @name Document ID
             * @type {string}
             */ documentId: string;
        /**
             * @name Collection ID
             * @type {string}
             */ collectionId: string;
        /**
             * @description Enables document caching. Call `actions.reload()` to get fresh document(s)
             * @type {boolean}
             */ cache?: boolean;
    };
    events: {
        change: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        loading: {};
        default: {
            document: any;
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
export declare type DocumentProps = typeof __propDef.props;
export declare type DocumentEvents = typeof __propDef.events;
export declare type DocumentSlots = typeof __propDef.slots;
/**
 * ### `<Document />`
 *
 * #### Arguments
 *
 * - documentId - *required* `@type - {string}`
 * - collectionId - *required* `@type - {string}`
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
 * 	<Document {collectionId} documentId={document.$id} let:document let:actions>
 * 		Title: {document.title}
 * 		Text: {document.text}
 * 		<button on:click={() => {actions.remove()}}>Delete</button>
 * 	</Document>
 * {/each}
 * </Collection>
 * ```
 */
export default class Document extends SvelteComponentTyped<DocumentProps, DocumentEvents, DocumentSlots> {
}
export {};

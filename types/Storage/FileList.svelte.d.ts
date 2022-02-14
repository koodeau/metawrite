/** @typedef {typeof __propDef.props}  FileListProps */
/** @typedef {typeof __propDef.events}  FileListEvents */
/** @typedef {typeof __propDef.slots}  FileListSlots */
/**
 * ### `<FileList />`
 *
 * #### Arguments
 *
 * - search - *optional* `@type - {string}`
 * - limit - *optional* `@type - {number}`
 * - offset - *optional* `@type - {number}`
 * - orderType - *optional* `@type - {string} ` => write  `"ASC"` or `"DESC"`
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
 * - **let:files**
 * - **let:error**
 *
 * #### Example
 *
 * ```svelte
 * <script>
 * import { FileList } from "metawrite"
 *
 * // Optional
 * let search = '';
 * let limit = 10;
 * let offset = 0;
 * let orderType = 'ASC';
 * </script>
 *
 * <FileList {search} {limit} {offset} {orderType}let:actions let:files>
 * {#each files as file}
 *     <p>File: {file.name}</p>
 * {/each}
 * <button on:click={actions.reload()}>Reload</button>
 * </FileList>
 * ```
 */
export default class FileList extends SvelteComponentTyped<{
    search?: string;
    offset?: number;
    limit?: number;
    orderType?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    loading: {};
    default: {
        files: import("appwrite").Models.File[];
        actions: {
            reload: () => Promise<import("appwrite").Models.FileList>;
        };
    };
    error: {
        error: any;
    };
}> {
}
export type FileListProps = typeof __propDef.props;
export type FileListEvents = typeof __propDef.events;
export type FileListSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        search?: string;
        offset?: number;
        limit?: number;
        orderType?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        loading: {};
        default: {
            files: import("appwrite").Models.File[];
            actions: {
                reload: () => Promise<import("appwrite").Models.FileList>;
            };
        };
        error: {
            error: any;
        };
    };
};
export {};

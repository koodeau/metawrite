/** @typedef {typeof __propDef.props}  LanguagesProps */
/** @typedef {typeof __propDef.events}  LanguagesEvents */
/** @typedef {typeof __propDef.slots}  LanguagesSlots */
/**
 * ### `<Languages />`
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
 * - **let:languages**
 *
 * #### Example
 *
 * ```svelte
 * <script>
 * import { Languages } from 'metawrite';
 * </script>
 *
 * <Languages let:actions let:languages>
 * <button on:click={actions.reload()}>Reload</button>
 * <p>There are {languages.sum} languages:</p>
 * {#each languages.languages as language}
 * 	<p>{language.name}, {language.code}></p>
 *    {/each}
 * </Languages>
 * ```
 */
export default class Languages extends SvelteComponentTyped<{}, {
    [evt: string]: CustomEvent<any>;
}, {
    loading: {};
    default: {
        languages: import("appwrite").Models.LanguageList;
        actions: {
            reload: () => Promise<import("appwrite").Models.LanguageList>;
        };
    };
    error: {
        error: any;
    };
}> {
}
export type LanguagesProps = typeof __propDef.props;
export type LanguagesEvents = typeof __propDef.events;
export type LanguagesSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {};
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        loading: {};
        default: {
            languages: import("appwrite").Models.LanguageList;
            actions: {
                reload: () => Promise<import("appwrite").Models.LanguageList>;
            };
        };
        error: {
            error: any;
        };
    };
};
export {};

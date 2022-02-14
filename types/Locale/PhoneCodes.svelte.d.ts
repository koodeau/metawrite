/** @typedef {typeof __propDef.props}  PhoneCodesProps */
/** @typedef {typeof __propDef.events}  PhoneCodesEvents */
/** @typedef {typeof __propDef.slots}  PhoneCodesSlots */
/**
 * ### `<PhoneCodes />`
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
 * - **let:codes**
 *
 * #### Example
 *
 * ```svelte
 * <script>
 * import { PhoneCodes } from 'metawrite';
 * </script>
 *
 * <PhoneCodes let:actions let:codes>
 * <button on:click={actions.reload()}>Reload</button>
 * <p>There are {codes.sum} phone codes:</p>
 * {#each codes.phones as phone}
 * 	<p>{phone.code} - {phone.countyName}></p>
 * {/each}
 * </PhoneCodes>
 * ```
 */
export default class PhoneCodes extends SvelteComponentTyped<{}, {
    [evt: string]: CustomEvent<any>;
}, {
    loading: {};
    default: {
        codes: import("appwrite").Models.PhoneList;
        actions: {
            reload: () => Promise<import("appwrite").Models.PhoneList>;
        };
    };
    error: {
        error: any;
    };
}> {
}
export type PhoneCodesProps = typeof __propDef.props;
export type PhoneCodesEvents = typeof __propDef.events;
export type PhoneCodesSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {};
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        loading: {};
        default: {
            codes: import("appwrite").Models.PhoneList;
            actions: {
                reload: () => Promise<import("appwrite").Models.PhoneList>;
            };
        };
        error: {
            error: any;
        };
    };
};
export {};

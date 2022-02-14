/** @typedef {typeof __propDef.props}  InitProps */
/** @typedef {typeof __propDef.events}  InitEvents */
/** @typedef {typeof __propDef.slots}  InitSlots */
/**
 * ## Initialize
 *
 * Must be initialised and wrap every `metawrite` component.
 *
 * ```svelte
 * <script>
 * import { Appwrite } from "metawrite";
 *
 * const config = {
 *   endpoint: "http://localhost/v1",
 *   project: "demo",
 *   locale: "fr",
 * };
 * </script>
 *
 * <Appwrite {...config}>
 * ...
 * </Appwrite>
 * ```
 *
 * ### Properties
 * | Name | Description |
 * | --- | --- |
 * | `endpoint` | Your Appwrite endpoint. `@type - {string}` |
 * | `project` | Your project ID. `@type - {string}` |
 * | `locale` | _Optional_ The users locale. `@type - {string}` |
 */
export default class Init extends SvelteComponentTyped<{
    endpoint: string;
    project: string;
    locale?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type InitProps = typeof __propDef.props;
export type InitEvents = typeof __propDef.events;
export type InitSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        endpoint: string;
        project: string;
        locale?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};

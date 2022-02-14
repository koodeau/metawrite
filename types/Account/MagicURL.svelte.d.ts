/** @typedef {typeof __propDef.props}  MagicUrlProps */
/** @typedef {typeof __propDef.events}  MagicUrlEvents */
/** @typedef {typeof __propDef.slots}  MagicUrlSlots */
/**
 * Creates Magic URL Session.
 *
 * ### `<MagicURL />`
 *
 * #### Directives
 *
 * **let:actions**
 *
 * | Name                        | Description                                                  |
 * | --------------------------- | ------------------------------------------------------------ |
 * | `create()` | Creates Magic URL Session. |
 *
 * #### Example
 *
 * ```svelte
 * <script>
 * import { MagicURL } from "metawrite";
 *
 * const userId = "32h2hj24h2"
 * const email = "user@example.com"
 * const url = "http://example.com" // optional
 * </script>
 *
 * <MagicURL let:actions>
 * <button on:click={actions.create(userId, email, url)}>Create MagicURL</button>
 * </MagicURL>
 * ```
 */
export default class MagicUrl extends SvelteComponentTyped<{}, {
    success: CustomEvent<any>;
    failure: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {
        actions: {
            create: (userId: string, email: string, url?: string) => Promise<import("appwrite").Models.Token>;
        };
    };
}> {
}
export type MagicUrlProps = typeof __propDef.props;
export type MagicUrlEvents = typeof __propDef.events;
export type MagicUrlSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {};
    events: {
        success: CustomEvent<any>;
        failure: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            actions: {
                create: (userId: string, email: string, url?: string) => Promise<import("appwrite").Models.Token>;
            };
        };
    };
};
export {};

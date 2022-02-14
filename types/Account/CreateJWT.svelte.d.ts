/** @typedef {typeof __propDef.props}  CreateJwtProps */
/** @typedef {typeof __propDef.events}  CreateJwtEvents */
/** @typedef {typeof __propDef.slots}  CreateJwtSlots */
/**
 * Creates JWT token.
 *
 * ### `<CreateJWT />`
 *
 * #### Directives
 *
 * **let:actions**
 *
 * | Name                        | Description                                                  |
 * | --------------------------- | ------------------------------------------------------------ |
 * | `create()` | Creates JWT token. |
 *
 * #### Example
 *
 * ```svelte
 * <script>
 * import { CreateJWT } from "metawrite";
 * </script>
 *
 * <CreateJWT let:actions>
 * <button on:click={actions.create}>Create JWT token</button>
 * </CreateJWT>
 * ```
 */
export default class CreateJwt extends SvelteComponentTyped<{}, {
    success: CustomEvent<any>;
    failure: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {
        actions: {
            create: () => Promise<import("appwrite").Models.Jwt>;
        };
    };
}> {
}
export type CreateJwtProps = typeof __propDef.props;
export type CreateJwtEvents = typeof __propDef.events;
export type CreateJwtSlots = typeof __propDef.slots;
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
                create: () => Promise<import("appwrite").Models.Jwt>;
            };
        };
    };
};
export {};

export type StorageProps = typeof __propDef.props;
export type StorageEvents = typeof __propDef.events;
export type StorageSlots = typeof __propDef.slots;
declare const __propDef: {
    props: {
        file: File;
        fileId: string;
    };
    events: {
        upload: CustomEvent<any>;
        success: CustomEvent<any>;
        failure: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            actions: {
                create: (fileId: string, file: File, read?: string[], write?: string[]) => Promise<import("appwrite").Models.File>;
            };
        };
    };
};
export {};

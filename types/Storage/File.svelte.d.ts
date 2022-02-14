export type FileProps = typeof __propDef.props;
export type FileEvents = typeof __propDef.events;
export type FileSlots = typeof __propDef.slots;
declare const __propDef: {
    props: {
        file: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            actions: {
                download: () => URL;
                view: () => URL;
                preview: (width: number, height: number, gravity: string, quality: number, borderWidth: number, borderColor: string, borderRadius: number, opacity: number, rotation: number, background: string, output: string) => URL;
                update: (read?: any, write?: any) => Promise<import("appwrite").Models.File>;
                delete: () => Promise<{}>;
            };
        };
    };
};
export {};

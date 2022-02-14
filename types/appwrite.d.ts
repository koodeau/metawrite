export namespace SDK {
    const sdk: Appwrite;
    function setConfig(config: {
        endpoint: string;
        project: string;
        locale?: string;
    }): void;
}
import { Appwrite } from "appwrite";

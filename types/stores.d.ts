export const active: import("svelte/store").Writable<boolean>;
export const currentUser: UserStore;
export const documents: DocumentsStore;
import { UserStore } from "./stores/user";
import { DocumentsStore } from "./stores/documents";

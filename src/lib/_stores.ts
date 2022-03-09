import { writable } from 'svelte/store';
import { UserStore } from './stores/_user';
import { DocumentsStore } from './stores/_documents';

export const active = writable(false);
export const currentUser: any = new UserStore();
export const documents = new DocumentsStore();

import { SDK as Appwrite } from '../_appwrite';
import { writable } from 'svelte/store';
import type { Models } from 'appwrite';

export class UserStore {
	subscribe: any;
	set: (this: void, value: any) => void;
	update: (this: void, updater: any) => void;
	constructor() {
		const { subscribe, set, update } = writable(null);
		this.subscribe = subscribe;
		this.set = set;
		this.update = update;
	}

	/**
	 * Reload the current User.
	 * @returns {Promise<Models.User<Models.Preferences>>}
	 */
	async reload(): Promise<Models.User<Models.Preferences>> {
		const response = await Appwrite.sdk.account.get();
		this.set(response);
		return response;
	}

	/**
	 * Logout the current User.
	 * @returns {Promise<object>}
	 */
	async logout(): Promise<object> {
		const response = await Appwrite.sdk.account.deleteSession('current');
		this.set(null);
		return response;
	}
}

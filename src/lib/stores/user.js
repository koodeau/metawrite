import { writable } from 'svelte/store';
import { Appwrite as SDK } from 'appwrite';

export const Appwrite = {
	sdk: new SDK(),
	setConfig: (/** @type {{ endpoint: string; project: string; locale?: string; }} */ config) => {
		Appwrite.sdk.setEndpoint(config.endpoint).setProject(config.project).setLocale(config.locale);
	}
};

export class UserStore {
	constructor() {
		const { subscribe, set, update } = writable(null);
		this.subscribe = subscribe;
		this.set = set;
		this.update = update;
	}

	/**
	 * Reload the current User.
	 * @returns {Promise<object>}
	 */
	async reload() {
		const response = await Appwrite.sdk.account.get();
		this.set(response);
		return response;
	}

	/**
	 * Logout the current User.
	 * @returns {Promise<object>}
	 */
	async logout() {
		const response = await Appwrite.sdk.account.deleteSession('current');
		this.set(null);
		return response;
	}
}

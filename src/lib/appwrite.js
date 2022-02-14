import { Appwrite } from 'appwrite';

export const SDK = {
	sdk: new Appwrite(),
	setConfig: (/** @type {{ endpoint: string; project: string; locale?: string; }} */ config) => {
		SDK.sdk.setEndpoint(config.endpoint).setProject(config.project).setLocale(config.locale);
	}
};

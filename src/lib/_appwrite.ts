import { Appwrite } from 'appwrite';

export const SDK = {
	sdk: new Appwrite(),
	setConfig: (config: { endpoint: string; project: string; locale?: string; realtime?: string; }) => {
		SDK.sdk.setEndpoint(config.endpoint).setProject(config.project).setLocale(config.locale).setEndpointRealtime(config.realtime);
	}
};

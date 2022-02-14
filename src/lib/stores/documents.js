import { SDK as Appwrite } from '../appwrite';
import { writable, get } from 'svelte/store';

export class DocumentsStore {
	constructor() {
		const { subscribe, set, update } = writable(new Map());
		this.subscribe = subscribe;
		this.set = set;
		this.update = update;
	}

	clear() {
		this.set(new Map());
	}

	/**
	 * Get Documents in a Collection
	 * @param {string} collectionId Collection Id
	 * @param {boolean} cache Use cached response
	 * @param {{ filters?: string[], limit?: number, offset?: number, orderField?: string, orderType?: string, orderCast?: string[], search?: string[] }} query Query paramters
	 * @returns {Promise<{documents: any[], sum: number}>}
	 */
	async fetchDocuments(collectionId, cache, query) {
		if (cache) {
			const docs = Array.from(get(this).entries())
				.filter((entry) => entry[0].startsWith(collectionId))
				.map((entry) => entry[1]);

			if (docs?.length) {
				return {
					documents: docs,
					sum: docs.length
				};
			}
		}

		const response = await Appwrite.sdk.database.listDocuments(
			collectionId,
			query.filters,
			query.limit,
			query.offset,
			query.orderField,
			query.orderType,
			query.orderCast,
			query.search
		);

		if (cache) {
			this.update((docs) => {
				for (const document of response.documents) {
					docs.set(`${collectionId}:${document.$id}`, document);
				}
				return docs;
			});
		}
		return response;
	}

	/**
	 * @param {string} collectionId Collection ID
	 * @param {string} documentId Document ID
	 * @param {boolean} cache Use cache
	 * @returns {Promise<any>}
	 */
	async fetchDocument(collectionId, documentId, cache) {
		const key = `${collectionId}:${documentId}`;
		if (cache) {
			const docs = get(this);
			if (docs.has(key)) return docs.get(key);
		}

		const response = await Appwrite.sdk.database.getDocument(collectionId, documentId);

		if (cache) {
			this.update((docs) => {
				docs.set(key, response);
				return docs;
			});
		}

		return response;
	}
}

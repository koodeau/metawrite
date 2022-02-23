import { SDK as Appwrite } from '../_appwrite';
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
	 * @param {string[]} queries Use cached response
	 * @param {{ limit?: number, offset?: number, cursor?: string, cursorDirection?: string, orderAttributes?: string[], orderTypes?: string[] }} query Query paramters
	 * @returns {Promise<{documents: any[], sum: number}>}
	 */
	async fetchDocuments(collectionId, cache, queries, query) {
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
			queries,
			query.limit,
			query.offset,
			query.cursor,
			query.cursorDirection,
			query.orderAttributes,
			query.orderTypes
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

import { SDK as Appwrite } from '../_appwrite';
import { writable, get } from 'svelte/store';

// type Document = {
//     collectionId: string;
// 	cache?: boolean;
// 	queries?: string[];
// 	limit?: number;
// 	offset?: number;
// 	cursor?: string;
// 	cursorDirection?: string;
// 	orderAttributes?: string[];
// 	orderTypes?: string[];
// }

export class DocumentsStore {
	subscribe: any;
	set: (this: void, value: Map<any, any>) => void;
	update: any;
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
	 * @param collectionId Collection Id
	 * @param cache Use cached response
	 * @param queries Array of query strings.
	 * @param limit Maximum number of documents to return in response. By default will return maximum 25 results. Maximum of 100 results allowed per request.
	 * @param offset Offset value. The default value is 0. Use this value to manage pagination.
	 * @param cursor ID of the document used as the starting point for the query, excluding the document itself. Should be used for efficient pagination when working with large sets of data. 
	 * @param cursorDirection Direction of the cursor.
	 * @param orderAttributes Array of attributes used to sort results.
	 * @param orderTypes Array of order directions for sorting attribtues. Possible values are DESC for descending order, or ASC for ascending order.
	 * @returns {Promise<{documents: any[], total: number}>}
	 */
	async fetchDocuments(collectionId: string, cache?: boolean, queries?: string[], limit?: number, offset?: number, cursor?: string, cursorDirection?: string, orderAttributes?: string[], orderTypes?: string[]): Promise<{ documents:any[]; total: number; }> {
		if (cache) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			const docs: any[] = Array.from(get(this).entries())
				.filter((entry) => entry[0].startsWith(collectionId))
				.map((entry) => entry[1]);

			if (docs?.length) {
				return {
					documents: docs,
					total: docs.length
				};
			}
		}

		const response = await Appwrite.sdk.database.listDocuments(
			collectionId,
			queries,
			limit,
			offset,
			cursor,
			cursorDirection,
			orderAttributes,
			orderTypes
		);

		if (cache) {
			this.update((docs: any) => {
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
	 * @returns {Promise<Record<string, unknown>>}
	 */
	async fetchDocument(collectionId: string, documentId: string, cache: boolean): Promise<Record<string, unknown>> {
		const key = `${collectionId}:${documentId}`;
		if (cache) {
			const docs: any = get(this);
			if (docs.has(key)) return docs.get(key);
		}

		const response = await Appwrite.sdk.database.getDocument(collectionId, documentId);

		if (cache) {
			this.update((docs: any) => {
				docs.set(key, response);
				return docs;
			});
		}

		return response;
	}
}

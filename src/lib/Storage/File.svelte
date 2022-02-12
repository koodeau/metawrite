<script>
	/**
	 * @slot {{
	 * file: any;
	 * actions: {
	 *  download: () => URL;
	 *  view: () => URL;
	 *  preview: (width?: number, height?: number, quality?: number, gravity?: string, borderWidth?: number, borderColor?: string, borderRadius?: number, opacity?: number, rotation?: number, background?: string, output?: string) => URL;
	 *  update: (read?: string[], write?: string[]) => Promise<object>;
	 *  delete: () => Promise<object>;
	 * }}}
	 * @slot {{ error: object }} error
	 */
	import { SDK as Appwrite } from '../appwrite';

	export let file;
	const actions = {
		download: () => Appwrite.sdk.storage.getFileDownload(file.$id),
		view: () => Appwrite.sdk.storage.getFileView(file.$id),
		preview: (
			/** @type {number} */ width,
			/** @type {number} */ height,
			/** @type {string} */ gravity,
			/** @type {number} */ quality,
			/** @type {number} */ borderWidth,
			/** @type {string} */ borderColor,
			/** @type {number} */ borderRadius,
			/** @type {number} */ opacity,
			/** @type {number} */ rotation,
			/** @type {string} */ background,
			/** @type {string} */ output
		) =>
			Appwrite.sdk.storage.getFilePreview(
				file.$id,
				width,
				height,
				gravity,
				quality,
				borderWidth,
				borderColor,
				borderRadius,
				opacity,
				rotation,
				background,
				output
			),
		update: async (read = file.$permissions.read, write = file.$permissions.write) =>
			await Appwrite.sdk.storage.updateFile(file.$id, read, write),
		delete: async () => await Appwrite.sdk.storage.deleteFile(file.$id)
	};
</script>

<slot {actions} />

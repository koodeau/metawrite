<script lang="ts">
	/**
	 * @slot {{
	 * bucketId: string;
	 * fileId: string;
	 * actions: {
	 *  download: () => URL;
	 *  view: () => URL;
	 *  preview: (width?: number, height?: number, quality?: number, gravity?: string, borderWidth?: number, borderColor?: string, borderRadius?: number, opacity?: number, rotation?: number, background?: string, output?: string) => URL;
	 *  update: (read?: string[], write?: string[]) => Promise<object>;
	 *  delete: () => Promise<object>;
	 * }}}
	 * @slot {{ error: object }} error
	 */
	import { SDK as Appwrite } from '../_appwrite';

	export let bucketId: string;
	export let fileId: string;

	const actions = {
		download: () => Appwrite.sdk.storage.getFileDownload(bucketId, fileId),
		view: () => Appwrite.sdk.storage.getFileView(bucketId, fileId),
		preview: (
			width?: number,
			height?: number,
			gravity?: string,
			quality?: number,
			borderWidth?: number,
			borderColor?: string,
			borderRadius?: number,
			opacity?: number,
			rotation?: number,
			background?: string,
			output?: string
		) =>
			Appwrite.sdk.storage.getFilePreview(
				bucketId,
				fileId,
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
		update: async (read?: string[], write?: string[]) =>
			await Appwrite.sdk.storage.updateFile(bucketId, fileId, read, write),
		delete: async () => await Appwrite.sdk.storage.deleteFile(bucketId, fileId)
	};
</script>

<slot {actions} />

<!-- 
	@component
	
### `<File />`

#### Arguments

- bucketId - it is your Bucket ID `@type - {string}`
- fileId - it is File ID `@type - {string}`

#### Directives

**let:actions**
| Name | Description |
| --- | --- |
| `download()` | Downloads file. |
| `view()` | Get file for View. |
| `preview(width, height, quality, background, output)` | Get file for preview. |
| `update(read, write)` | Updates a file. |
| `delete()` | Deletes a file. |

#### Example 

```svelte
<script lang="ts">
	import { File } from 'metawrite';

	// Required
	let bucketId: string;
	let fileId: string;

	// OPTIONAL
	/** @type {number} */ let width;
	/** @type {number} */ let height;
	/** @type {string} */ let gravity;
	/** @type {number} */ let quality;
	/** @type {number} */ let borderWidth;
	/** @type {string} */ let borderColor;
	/** @type {number} */ let borderRadius;
	/** @type {number} */ let opacity;
	/** @type {number} */ let rotation;
	/** @type {string} */ let background;
	/** @type {string} */ let output;
	/** @type {string[]} */ let read;
	/** @type {string[]} */ let write;
</script>

<File {bucketId} {fileId} let:actions>
	<button on:click={actions.download()}>Download File</button>
	<button on:click={actions.view()}>File View</button>
	<button on:click={actions.preview()}>Preview File</button>
	<button on:click={actions.update(read, write)}>Update File</button>
	<button on:click={actions.delete()}>Delete File</button>
</File>
```
	
 -->

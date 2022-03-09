<script lang="ts">
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
	import { SDK as Appwrite } from '../_appwrite';

	export let file: {
		$id: string;
		bucketId: string;
		$permissions: { read?: string[]; write?: string[] };
		[key: any]: any;
	};

	const actions = {
		download: () => Appwrite.sdk.storage.getFileDownload(file.bucketId, file.$id),
		view: () => Appwrite.sdk.storage.getFileView(file.bucketId, file.$id),
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
				file.bucketId,
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
			await Appwrite.sdk.storage.updateFile(file.bucketId, file.$id, read, write),
		delete: async () => await Appwrite.sdk.storage.deleteFile(file.bucketId, file.$id)
	};
</script>

<slot {actions} />

<!-- 
	@component
	
### `<File />`

#### Arguments

- file - it is fileId `@type - {string}`

#### Directives

**let:actions**
| Name | Description |
| --- | --- |
| `download()` | Downloads file. |
| `view(as)` | Get file for View. |
| `preview(width, height, quality, background, output)` | Get file for preview. |
| `update(read, write)` | Updates a file. |
| `delete()` | Deletes a file. |

#### Example 

```svelte
<script>
	import { File } from 'metawrite';

	// Required
	/**@type {File}*/ let file;

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

<File {file} let:actions>
	<button on:click={actions.download()}>Download File</button>
	<button on:click={actions.view()}>File View</button>
	<button on:click={actions.preview()}>Preview File</button>
	<button on:click={actions.update(read, write)}>Update File</button>
	<button on:click={actions.delete()}>Delete File</button>
</File>
```
	
 -->

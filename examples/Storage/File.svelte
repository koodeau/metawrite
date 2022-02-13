<script>
	import { File } from '$lib';

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

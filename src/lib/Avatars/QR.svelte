<script>
	import { SDK as Appwrite } from '../appwrite';

	export let text;
	export let size = 400;
	export let margin = 1;
	export let download = false;

	let src = Appwrite.sdk.avatars.getQR(text, size, margin, download ? true : false);
</script>

<slot {src} />

<!-- 
  @component
  
### `<QR />`

#### Arguments

- text - *required* `@type - {string}`
- size - *optional* `@type - {optional}`
- margin - *optional* `@type - {number}`
- download - *optional* `@type - {boolean}`

#### Directives

- **let:src** Image link `@type - {URL}`

#### Example 

```svelte
<script>
	import { QR } from 'metawrite';

	let text = 'https://increas.io/'; // could be any text
	let size = 500;
	let margin = 1;
	let download = false;
</script>

<QR {text} {size} {margin} {download} let:src>
	<img src={String(src)} alt="QR Code" />
</QR>

```
  
 -->

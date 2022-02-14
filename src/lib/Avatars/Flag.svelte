<script>
	import { SDK as Appwrite } from '../appwrite';

	export let code;
	export let width = 100;
	export let height = 100;
	export let quality = 100;

	let src = Appwrite.sdk.avatars.getFlag(code, width, height, quality);
</script>

<slot {src} />

<!-- 
  @component

### `<Flag />`

#### Arguments

- code - *required* `@type - {string}`
- width - *optional* `@type - {number}`
- height - *optional* `@type - {string}`
- quality - *optional* `@type - {string}`

#### Directives

- **let:src** Image link `@type - {URL}`

#### Example 

```svelte
<script>
    import { Flag } from "metawrite"
</script>

<Flag code="canada" let:src>
    <img src={String(src)} alt="flag" />
</Flag>
```
 -->

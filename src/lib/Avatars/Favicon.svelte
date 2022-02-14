<script>
	import { SDK as Appwrite } from '../appwrite';

	export let url;

	let src = Appwrite.sdk.avatars.getFavicon(url);
</script>

<slot {src} />

<!-- 
  @component
  
### `<Favicon />`

#### Arguments

- url - *required* `@type - {string}`

#### Directives

- **let:src** Image link `@type - {URL}`

```svelte
<script>
    import { Favicon } from "metawrite"
    const url = window.location.href;
</script>

<Favicon {url} let:src>
    <img src={String(src)} alt="favicon" />
</Favicon>
```
  
 -->

<script>
	import { Appwrite as SDK } from 'appwrite';

	export const Appwrite = {
		sdk: new SDK(),
		setConfig: (/** @type {{ endpoint: string; project: string; locale?: string; }} */ config) => {
			Appwrite.sdk.setEndpoint(config.endpoint).setProject(config.project).setLocale(config.locale);
		}
	};

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

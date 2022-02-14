<script>
	import { Appwrite as SDK } from 'appwrite';

	export const Appwrite = {
		sdk: new SDK(),
		setConfig: (/** @type {{ endpoint: string; project: string; locale?: string; }} */ config) => {
			Appwrite.sdk.setEndpoint(config.endpoint).setProject(config.project).setLocale(config.locale);
		}
	};

	export let url = '';
	export let width;
	export let height;

	let src = Appwrite.sdk.avatars.getImage(url, width, height);
</script>

<slot {src} />

<!-- 
  @component

### `<Image />`

#### Arguments

- url - *required* `@type - {string}`
- width - *optional* `@type - {number}`
- height - *optional* `@type - {number}`

#### Directives

- **let:src** Image link `@type - {URL}`

#### Example

```svelte
<script>
    import { Image } from "metawrite";

    let url = "https://increas.io/";
    let width, height = 100;
</script>

<Image {url} {width} {height} let:src>
    <img src={String(src)} alt="someImage" />
</Image>
```
 -->

<script>
	import { SDK as Appwrite } from '../appwrite';

	export let code;
	export let width = 100;
	export let height = 100;
	export let quality = 100;

	let src = Appwrite.sdk.avatars.getCreditCard(code, width, height, quality);
</script>

<slot {src} />

<!-- 
  @component

### `<CreditCard />`

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
    import { CreditCard } from "metawrite"
</script>

<CreditCard code="amex" let:src>
    <img src={String(src)} alt="card" />
</CreditCard>
```

 -->

<script>
	/**
	 * @slot {{
	 * authorize: (provider: string, success: string, failure: string) => Promise<object>;
	 * }}
	 */
	import { SDK as Appwrite } from '../_appwrite';

	export let provider;
	export let success;
	export let failure;

	const authorize = () => Appwrite.sdk.account.createOAuth2Session(provider, success, failure);
</script>

<slot {authorize} />

<!-- 
  @component

### `<AuthOAuth2 />`

#### Properties
| Name | Description |
| --- | --- |
| `provider` | OAuth2 provider. `@type - {string}` |
| `success` | Success url. `@type - {string}` |
| `failure` | Failure url. `@type - {string}` |
|#### Directives||

**let:authorize()**

#### Example 

```svelte
<script>
    import { AuthOAuth2 } from "metawrite";
  </script>
  
  <AuthOAuth2
    provider="google"
    success="http://localhost:3000?success"
    failure="http://localhost:3000?failure"
    let:authorize>
    <button on:click={authorize}>Login Google</button>
  </AuthOAuth2>
```

 -->

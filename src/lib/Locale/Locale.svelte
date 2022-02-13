<script>
  /**
   * @slot {{
   * code: object;
   * actions: {
   *  reload: () => Promise<object>;
   * }}}
   * @slot {{ error: object }} error
   */
  import { SDK as Appwrite } from "../appwrite";

  const fetchUserLocale = () => Appwrite.sdk.locale.get();

  const actions = {
    reload: () => (locale = fetchUserLocale()),
  };

  let locale = fetchUserLocale();
</script>

{#await locale}
  <slot name="loading" />
{:then response}
  <slot code={response} {actions} />
{:catch error}
  <slot name="error" {error} />
{/await}

<!-- 
  @component
  
### `<Locale />`

#### Slots

- **loading**
- **error**

#### Directives

**let:actions**
| Name | Description |
| --- | --- |
| `reload()` | Reload. |

- **let:code** `object`

#### Example 

```svelte
<script>
	import { Locale } from 'metawrite';
</script>

<Locale let:actions let:code>
	<h1>Active Session</h1>
	<button on:click={actions.reload()}>Reload</button>
	<p>Location: {code.country}, {code.continentCode}</p>
	<p>IP: {code.ip}</p>
</Locale>
```
  
 -->

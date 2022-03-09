<script>
	/**
	 * @slot {{
	 * continents: any;
	 * actions: {
	 *  reload: () => Promise<object>;
	 * }}}
	 * @slot {{ error: object }} error
	 */
	import { SDK as Appwrite } from '../_appwrite';

	const fetchContinents = () => Appwrite.sdk.locale.getContinents();

	const actions = {
		reload: () => (continents = fetchContinents())
	};

	let continents = fetchContinents();
</script>

{#await continents}
	<slot name="loading" />
{:then response}
	<slot continents={response} {actions} />
{:catch error}
	<slot name="error" {error} />
{/await}

<!-- 
  @component

### `<Continents />`

#### Directives

**let:actions**
| Name | Description |
| --- | --- |
| `reload()` | Reload. |

- **let:continents**

#### Slots

- **loading**
- **error**

#### Example 

```svelte
<script>
    import { Continents } from "metawrite"
</script>

<Continents let:actions let:continents>
    <button on:click={actions.reload()}>Reload</button>
    <p>There are {continents.total} continents:</p>
    {#each continents.continents as continent}
        <p>{continent.name}, {continent.code}</p>
    {/each}
</Continents>
```

 -->

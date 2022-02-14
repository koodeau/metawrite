<script>
	/**
	 * @slot {{
	 * currencies: any;
	 * actions: {
	 *  reload: () => Promise<object>;
	 * }}}
	 * @slot {{ error: object }} error
	 */
	import { Appwrite as SDK } from 'appwrite';

	export const Appwrite = {
		sdk: new SDK(),
		setConfig: (/** @type {{ endpoint: string; project: string; locale?: string; }} */ config) => {
			Appwrite.sdk.setEndpoint(config.endpoint).setProject(config.project).setLocale(config.locale);
		}
	};

	const fetchCurrencies = () => Appwrite.sdk.locale.getCurrencies();

	const actions = {
		reload: () => (currencies = fetchCurrencies())
	};

	let currencies = fetchCurrencies();
</script>

{#await currencies}
	<slot name="loading" />
{:then response}
	<slot currencies={response} {actions} />
{:catch error}
	<slot name="error" {error} />
{/await}

<!-- 
  @component
  
### `<Currencies />`

#### Slots

- **loading**
- **error**

#### Directives

**let:actions**
| Name | Description |
| --- | --- |
| `reload()` | Reload. |

- **let:currencies**

#### Example 

```svelte
<script>
    import { Currencies } from "metawrite"
</script>

<Currencies let:actions let:currencies>
    <button on:click={actions.reload()}>Reload</button>
    <p>There are {currencies.sum} currencies:</p>
    {#each currencies.currencies as currency}
        <p>{currency.symbol} - {currency.name} ({currency.code})</p>
    {/each}
</Currencies>
```
  
 -->

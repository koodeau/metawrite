<script>
	/**
	 * @slot {{
	 * countries: any;
	 * actions: {
	 *  reload: () => Promise<object>;
	 * }}}
	 * @slot {{ error: object }} error
	 */
	import { SDK as Appwrite } from '../appwrite';

	export let eu = false;

	const fetchCountries = eu
		? () => Appwrite.sdk.locale.getCountriesEU()
		: () => Appwrite.sdk.locale.getCountries();

	const actions = {
		reload: () => (countries = fetchCountries())
	};

	let countries = fetchCountries();
</script>

{#await countries}
	<slot name="loading" />
{:then response}
	<slot countries={response} {actions} />
{:catch error}
	<slot name="error" {error} />
{/await}

<!-- 
  @component
  
### `<Countries />`

#### Arguments

- eu

#### Slots

- **loading**
- **error**

#### Directives

**let:actions**
| Name | Description |
| --- | --- |
| `reload()` | Reload. |

- **let:countries**

#### Example 

```svelte
<script>
    import { Countries } from "metawrite"

    let eu = true; // if you want to list only EU countries
</script>

<Countries let:actions let:countries>
    <button on:click={actions.reload()}>Reload</button>
    <p>There are {countries.sum} countries in the world:</p>
    {#each countries.countries as country}
        <p>{country.name}, {country.code}</p>
    {/each}
</Countries>

<Countries {eu} let:actions let:countries>
    <button on:click={actions.reload()}>Reload</button>
    <p>There are {countries.sum} countries in EU:</p>
    {#each countries.countries as country}
        <p>{country.name}, {country.code}</p>
    {/each}
</Countries>
```
  
 -->

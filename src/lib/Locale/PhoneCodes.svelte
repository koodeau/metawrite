<script>
  /**
   * @slot {{
   * codes: any;
   * actions: {
   *  reload: () => Promise<object>;
   * }}}
   * @slot {{ error: object }} error
   */
  import { SDK as Appwrite } from "../appwrite";

  const fetchPhoneCodes = () => Appwrite.sdk.locale.getCountriesPhones();

  const actions = {
    reload: () => (phoneCodes = fetchPhoneCodes()),
  };

  let phoneCodes = fetchPhoneCodes();
</script>

{#await phoneCodes}
  <slot name="loading" />
{:then response}
  <slot codes={response} {actions} />
{:catch error}
  <slot name="error" {error} />
{/await}

<!-- 
  @component
  
### `<PhoneCodes />`

#### Slots

- **loading**
- **error**

#### Directives

**let:actions**
| Name | Description |
| --- | --- |
| `reload()` | Reload. |

- **let:codes**

#### Example 

```svelte
<script>
	import { PhoneCodes } from 'metawrite';
</script>

<PhoneCodes let:actions let:codes>
	<button on:click={actions.reload()}>Reload</button>
	<p>There are {codes.sum} phone codes:</p>
	{#each codes.phones as phone}
		<p>{phone.code} - {phone.countyName}></p>
	{/each}
</PhoneCodes>
```
  
 -->

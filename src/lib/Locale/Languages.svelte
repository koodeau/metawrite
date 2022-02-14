<script>
	/**
	 * @slot {{
	 * languages: any;
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

	const fetchLanguages = () => Appwrite.sdk.locale.getLanguages();

	const actions = {
		reload: () => (languages = fetchLanguages())
	};

	let languages = fetchLanguages();
</script>

{#await languages}
	<slot name="loading" />
{:then response}
	<slot languages={response} {actions} />
{:catch error}
	<slot name="error" {error} />
{/await}

<!-- 
  @component
  
### `<Languages />`

#### Slots

- **loading**
- **error**

#### Directives

**let:actions**
| Name | Description |
| --- | --- |
| `reload()` | Reload. |

- **let:languages**

#### Example 

```svelte
<script>
	import { Languages } from 'metawrite';
</script>

<Languages let:actions let:languages>
	<button on:click={actions.reload()}>Reload</button>
	<p>There are {languages.sum} languages:</p>
	{#each languages.languages as language}
		<p>{language.name}, {language.code}></p>
    {/each}
</Languages>
```
  
 -->

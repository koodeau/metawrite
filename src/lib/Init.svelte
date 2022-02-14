<script>
	import { onMount } from 'svelte';
	import { active } from './stores';

	import { Appwrite as SDK } from 'appwrite';

	export const Appwrite = {
		sdk: new SDK(),
		setConfig: (/** @type {{ endpoint: string; project: string; locale?: string; }} */ config) => {
			Appwrite.sdk.setEndpoint(config.endpoint).setProject(config.project).setLocale(config.locale);
		}
	};

	/** @type {string} */
	export let endpoint;
	/** @type {string} */
	export let project;
	/** @type {string} */
	export let locale = 'en';

	onMount(() => {
		if (endpoint == '') {
			console.error('Endpoint must be set.');
			return;
		}
		if (project == '') {
			console.error('Project ID must be set.');
			return;
		}

		Appwrite.setConfig({ endpoint, project, locale });
		active.set(true);
	});
</script>

{#if $active}
	<slot />
{/if}

<!-- 
	@component
	
## Initialize

Must be initialised and wrap every `metawrite` component.

```svelte
<script>
  import { Appwrite } from "metawrite";

  const config = {
    endpoint: "http://localhost/v1",
    project: "demo", 
    locale: "fr",
  };
</script>

<Appwrite {...config}>
  ...
</Appwrite>
```

### Properties
| Name | Description |
| --- | --- |
| `endpoint` | Your Appwrite endpoint. `@type - {string}` |
| `project` | Your project ID. `@type - {string}` |
| `locale` | _Optional_ The users locale. `@type - {string}` |
	
 -->

<script lang="ts">
	import { onMount } from 'svelte';
	import { active } from './_stores';
	import { SDK as Appwrite } from './_appwrite';

	export let endpoint: string;
	export let project: string;
	export let locale = 'en';
	export let realtime = endpoint;

	onMount(() => {
		if (endpoint == '') {
			console.error('Endpoint must be set.');
			return;
		}
		if (project == '') {
			console.error('Project ID must be set.');
			return;
		}

		Appwrite.setConfig({ endpoint, project, locale, realtime });
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

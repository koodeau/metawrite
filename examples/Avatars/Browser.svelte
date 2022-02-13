<script>
	import { Browser } from '$lib';
</script>

<Browser code="firefox" let:src>
	<img src={String(src)} alt="Browser" />
</Browser>

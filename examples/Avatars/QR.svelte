<script>
	import { QR } from '$lib';

	let text = 'https://increas.io/'; // could be any text
	let size = 500;
	let margin = 1;
	let download = false;
</script>

<QR {text} {size} {margin} {download} let:src>
	<img src={String(src)} alt="QR Code" />
</QR>

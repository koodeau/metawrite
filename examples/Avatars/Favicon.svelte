<script>
    import { Favicon } from "$lib"
    const url = window.location.href;
</script>

<Favicon {url} let:src>
    <img src={String(src)} alt="favicon" />
</Favicon>

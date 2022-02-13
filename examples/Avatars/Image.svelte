<script>
    import { Image } from "$lib"

    let url = "https://increas.io/"
    let width, height = 100;
</script>

<Image {url} {width} {height} let:src>
    <img src={String(src)} alt="someImage" />
</Image>

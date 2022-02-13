<script>
    import { CreditCard } from "$lib"
</script>

<CreditCard code="amex" let:src>
    <img src={String(src)} alt="card" />
</CreditCard>

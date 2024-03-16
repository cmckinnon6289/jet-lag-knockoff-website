<template>
    <div class="product">
        <b>{{ product.title }}</b>
        <p>{{ product.description }}</p>
        <p><b>Price: </b>{{ product.price }}</p>
        <BuyButton />
    </div>
</template>

<script setup>
import BuyButton from "@/components/buttons/BuyButton.vue"
defineProps({
    product: {
        type: Object,
        required: true
    }
})
</script>

<style>
</style>
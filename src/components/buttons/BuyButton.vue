<template>
    <div>
        <button class="button is-success" @click="buy(product)">Buy</button>
    </div>
</template>

<script setup>
function buy(product) {
    let confirmation = confirm(`you tryna buy ${product.name}`);
    if (confirmation) {
        console.log("bought")
    } else {
        console.log("not bought")
    }
}

defineProps({
    product: {
        type: Object,
        required: true
    }
})
</script>

<style>
</style>
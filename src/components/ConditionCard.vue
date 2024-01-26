<template>
    <div class="card">
        <h1 class="title">{{ card.title }}</h1>
        <p>{{ card.description }}</p>
    </div>
</template>

<script setup>
defineProps({
    card: {
        type: Object,
        required: true
    }
})
</script>

<style scoped>
.title {
    font-weight: bold;
}
.card {
    width: 250px;
    height: 336px;
    border: 2px solid black;
    border-radius: 10%;
}
</style>
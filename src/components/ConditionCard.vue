<template>
    <div class="card">
        <h1 class="title">{{ card.name }}</h1>
        <p>{{ card.description }}</p>
        <button v-if="card.canVeto" class="button is-danger">Veto</button>
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
    border-radius: 5%;
    padding: 8px;
    margin: 8px;
}
</style>
<template>
    <div class="card">
        <h1 v-if="card.type === 1" class="type" style="color: purple;">CURSE</h1>
        <h1 v-else class="type" style="color: orange">CHALLENGE</h1>
        <h2 class="card-title">{{ card.name }}</h2>
        <p>{{ card.description }}</p>
        <CardModal :card="card" />
    </div>
</template>

<script setup>
import CardModal from "@/components/CardModal.vue"

defineProps({
    card: {
        type: Object,
        required: true
    }
})


</script>

<style scoped>
.type {
    font-weight: bold;
}
.card-title {
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
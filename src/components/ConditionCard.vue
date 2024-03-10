<template>
    <div v-if="card.type === 1" class="curse card" @click="handleModal(`c${card._id}`)">
        <h1 class="type" style="color: purple;">CURSE</h1>
        <h2 class="card-title">{{ card.name }}</h2>
        <p>{{ card.description }}</p>
        <CardModal :card="card" />
    </div>
    <div v-else class="challenge card" @click="handleModal(`c${card._id}`)">
        <h1 class="type" style="color: orange">CHALLENGE</h1>
        <h2 class="card-title">{{ card.name }}</h2>
        <p>{{ card.description }}</p>
        <CardModal :card="card" />
    </div>
</template>

<script setup>
import CardModal from "@/components/CardModal.vue"

function handleModal(id) {
    let modal = document.querySelector(`#${String(id)}`);
    modal.classList.toggle("is-active")
}

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
    border-radius: 16px;
    padding: 8px;
    margin: 8px;
}
.challenge {
    background-color: lightcyan;
}
.curse {
    background-color: lightsalmon;
}
</style>
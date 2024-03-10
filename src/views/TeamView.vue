<template>
    <ConditionCard v-for="card in deck" :key="card.id" :card="card" />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ConditionCard from '@/components/ConditionCard.vue'
import axios from 'axios';
const deck = ref(null);

onMounted(() => {
    axios.get("https://jet-lag-toronto-knockoff-api.onrender.com/api/internal/assets/cards")
    .then((response) => {
        deck.value = response.data;
    })
    .catch((error) => {
        console.log(error);
    })
})
</script>

<style>
</style>
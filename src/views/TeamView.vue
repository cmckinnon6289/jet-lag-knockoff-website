<template>
    <div class="views">
        <div class="team-view">
            <div class="title-bar">
                <b>Team View</b>
            </div>
            <div class="info">
                <b>Hello.</b>
            </div>
        </div>
        <div class="card-view">
            <div class="title-bar">
                <b>Card View</b>
            </div>
            <div class="info">
                <ConditionCard v-for="card in deck" :key="card.id" :card="card" />
            </div>
        </div>
    </div>
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
.views {
    margin: 1%;
    display: flex;
    flex-wrap: wrap;
}

.team-view,
.card-view {
    width: 48%; /* 50% - 1% views margin - 1% margin in each view */
    box-sizing: border-box; /* Include padding and border in the width calculation */
    margin: 1%;
    .info {
        padding: 1%;
    };
    .title-bar {
        padding: 1%;
        background-color: black;
        color: white;
    };
}

.team-view {
    background-color: lightcoral;
}

.card-view { 
    background-color: lightblue;
}

.card-view .info {
    display: flex;
    flex-wrap: wrap;
}

</style>
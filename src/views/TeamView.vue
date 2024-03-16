<template>
    <div class="views">
        <div class="shop-view">
            <div class="title-bar">
                <b>Shop View</b>
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
:root {
    --outer-margin: 1%;
    --inner-margin: 1%;
}

.views {
    margin: 1%;
    display: flex;
    flex-wrap: wrap;
}

.shop-view,
.card-view {
    width: calc(50% - var(--outer-margin) - var(--inner-margin)); /* 50% - 1% views margin - 1% margin in each view */
    box-sizing: border-box; /* Include padding and border in the width calculation */
    margin: var(--outer-margin);
    .info {
        padding: var(--inner-margin);
    };
    .title-bar {
        padding: 1%;
        background-color: black;
        color: white;
    };
}

.shop-view {
    background-color: lightcoral;
}

.card-view { 
    background-color: lightblue;
}

.card-view .info {
    display: flex;
    flex-wrap: wrap;
}

@media (max-width: 768px) {
    .shop-view, .card-view {
        width: 100%;
        flex-wrap: wrap;
        margin-bottom: 16px;
    }
    .card-view {
        .card {
            margin: auto;
            margin-bottom: var(--inner-margin);
            margin-top: var(--inner-margin);
        }
    }
}
</style>
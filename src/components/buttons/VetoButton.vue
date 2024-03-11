<template>
    <div>
        <button class="button is-danger" @click="veto(card)">Veto</button>
    </div>
</template>

<script setup>
function veto(card) {
    let confirmation = confirm(`you tryna veto ${card.name}`);
    if (confirmation) {
        console.log("vetoed")
    } else {
        console.log("not vetoed")
    }
}

defineProps({
    card: {
        type: Object,
        required: true
    }
})
</script>

<style>
</style>
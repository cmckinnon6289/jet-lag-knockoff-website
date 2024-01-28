<template>
    <div class="modal" :id="'c'+card.id">
        <div class="modal-background"></div>
        <div class="modal-content">
            <p>hi</p>
            <ClaimButton v-if="card.canActive" />
            <VetoButton v-if="card.canVeto" />
        </div>
        <button class="modal-close is-large" aria-label="close"></button>
    </div>
</template>

<script setup>

defineProps({
    card: {
        type: Object,
        required: true
    }
})

import ClaimButton from "@/components/buttons/ClaimButton.vue"
import VetoButton from "@/components/buttons/VetoButton.vue"
</script>

<style>
</style>
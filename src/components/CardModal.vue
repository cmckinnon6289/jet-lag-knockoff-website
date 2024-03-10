<template>
    <div class="modal" :id="'c'+card._id">
        <div class="modal-background"></div>
        <div class="modal-content">
            <p>Choose an action below.</p>
            <ClaimButton v-if="card.canActive" />
            <VetoButton v-if="card.canVeto" />
        </div>
        <button class="modal-close is-large" aria-label="close" @click="handleModal(`c${card._id}`)"></button>
    </div>
</template>

<script setup>
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

import ClaimButton from "@/components/buttons/ClaimButton.vue"
import VetoButton from "@/components/buttons/VetoButton.vue"
</script>

<style>
.modal-content{
    color: white;
}
</style>
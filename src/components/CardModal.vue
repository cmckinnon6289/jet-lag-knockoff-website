<template>
    <div class="modal" :id="'c'+card._id">
        <div class="modal-background"></div>
        <div class="modal-content">
            <span><b>For card: </b>{{ card.name }}</span>
            <p>Choose an action below.</p>
            <ClaimButton v-if="card.canActive" />
            <VetoButton v-if="card.canVeto" />
        </div>
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
.modal-content{
    color: white;
}
.modal {
    padding: 32px;
}
</style>
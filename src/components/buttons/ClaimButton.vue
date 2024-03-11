<template>
    <div>
        <button class="button is-success" @click="claim(card)">Complete</button>
    </div>
</template>

<script setup>
import axios from 'axios';

async function claim(card) {
    let valid = false
    let district
    while (!valid) {
        let validate = prompt("type the NUMBER of the ward you wish to claim");
        if (!isNaN(validate)) {
            district = Number(validate);
            valid = true;
        }
    }
    let teamid = "65ee496b842c18edf78336bd" // TODO: get session team ID
    const team = await axios.get(`https://jet-lag-toronto-knockoff-api.onrender.com/api/teams/get/${teamid}`)
    await axios.patch('https://jet-lag-toronto-knockoff-api.onrender.com/api/teams/update', {
        id: teamid,
        update: {
            balance: team.data.balance + card.tokens
            //TODO: add claimed district to districts array
        }
    })
    //TODO: make card go away after claiming
    //dom delete, update team's active card
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
<template>
    <div>
        <button class="button is-danger" @click="veto">Veto</button>
    </div>
</template>

<script>
export default {
    methods: {
        veto() {
            let confirmation = confirm("h")
            if (confirmation) {
                console.log("vetoed")
            } else {
                console.log("not vetoed")
            }
        }
    }
}
</script>

<style>
</style>
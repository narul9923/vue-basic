<template>
    <div>
        <button v-bind:disabled="buttonDisabled">My Button</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            buttonDisabled: true
        }
    }
}
</script>

<style>

</style>
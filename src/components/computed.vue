<template>
    <div>
        <p>Original Message: "{{ message }}"</p>
        <button @click="reveredMessage">Revered</button>
        <!-- <p>Computed revered message : {{ reveredMessage }}</p> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'Hello',
        }
    },
    methods: {
        reveredMessage: function() {
            console.log(this.message.split('').reverse().join(''));
            this.message = this.message.split('').reverse().join('');
        }
    }
}
</script>

<style>

</style>
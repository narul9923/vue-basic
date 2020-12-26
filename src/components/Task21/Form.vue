<template>
    <div>
        <h2>Form</h2>
        <p>Masukan Nama:</p>

        <input type="text" v-model="message">
    </div>
</template>

<script>
export default {
    name: 'Form',
    computed: {
        message: {
            get() {
                console.log(this.$store.state.name);
                return this.$store.state.name
            },
            set (value) {
                this.$store.commit('updateName', value)
            }
        }
    }
}
</script>

<style>

</style>
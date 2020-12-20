<template>
    <div>
        <h1>Warna Farovit Saya : {{ favoriteColor }}</h1>
        <button v-on:click="changeColor('hijau')">Hijau</button>
        <button v-on:click="changeColor('biru')">Biru</button>
        <button v-on:click="changeColor('merah')">Merah</button>
    </div>
</template>
<script>
export default {
    name: 'Task 1',
    data() {
        return  {
            favoriteColor: 'hijau'
        }
    },
    methods: {
        changeColor: function(color) {
            this.favoriteColor = color;
        }
    }
}
</script>
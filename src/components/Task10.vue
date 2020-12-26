<template>
    <div>
        <h2>Simple Todo</h2>
        <input type="text" v-model="newItem">
        &nbsp;<button @click="addItem">Tambah</button>
        <hr>
        <ul>
            <li v-for="(item, idx) in items" :key="idx">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Task10',
    data() {
        return {
            newItem: '',
            items: [],
        }
    },
    methods: {
        addItem: function() {
            this.items.push(this.newItem);
            this.newItem = '';
        }
    }
}
</script>

<style>

</style>
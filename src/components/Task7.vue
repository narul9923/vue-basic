<template>
    <div>
        <h2>Generate Item</h2>
        <table>
            <tr>
                <td>Jumlah Item : </td>
                <td><input type="text" v-model="count"></td>
            </tr>
            <tr>
                <td></td>
                <td><button @click="generate">Generate</button></td>
            </tr>
        </table>
        <h3>Hasil:</h3>
        <ul>
            <li v-for="(item, idx) in items" :key="idx">
                <span v-if="idx % 2 == 0" style="color:red"><strong>{{ item }}</strong></span>
                <span v-if="idx % 2 != 0" style="color:green"><strong>{{ item }}</strong></span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Task7',
    data() {
        return {
            items: [],
            count: 0
        }
    }, 
    methods: {
        generate: function() {
            this.items = [];

            for (var i = 0; i < this.count; i++) {
                this.items[i] = "Item " + (i + 1);
                
            }
        }
    }
}
</script>

<style>

</style>
<template>
    <div>
        <h2>Generate Item</h2>
        <table>
            <tr>
                <td>Jumlah Item : </td>
                <td><input type="text" v-model="count" @keyup="generate"></td>
            </tr>
            <tr>
                <td>Warna Ganjil</td>
                <td>
                    <select v-model="oddColor">
                        <option value="green">Hijau</option>
                        <option value="red">Merah</option>
                        <option value="blue">Biru</option>
                        <option value="black">Hitam</option>
                        <option value="orange">Orange</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>Warna Genap</td>
                <td>
                    <select v-model="evenColor">
                        <option value="green">Hijau</option>
                        <option value="red">Merah</option>
                        <option value="blue">Biru</option>
                        <option value="black">Hitam</option>
                        <option value="orange">Orange</option>
                    </select>
                </td>
            </tr>
        </table>
        <h3>Hasil:</h3>
        <ul>
            <li v-for="(item, idx) in items" :key="idx">
                <span v-if="idx % 2 == 0" :style="{color: oddColor}"><strong>{{ item }}</strong></span>
                <span v-if="idx % 2 != 0" :style="{color: evenCOlor}"><strong>{{ item }}</strong></span>
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
            count: 0,
            oddColor: 'red',
            evenColor: 'green',
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
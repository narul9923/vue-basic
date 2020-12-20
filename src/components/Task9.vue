<template>
    <div>
        <h2>Generate Item</h2>
        <table>
            <tr>
                <td>Jumlah Item : </td>
                <td><input type="text" v-model="count" @keyup="generate"></td>
            </tr>
        </table>
        <h3>Hasil:</h3>
        <ul>
            <li v-for="(item, idx) in items" :key="idx">
                <span><strong>{{ item }}</strong></span>
            </li>
        </ul>
        <h4>Pindahkan item ke kiri dan ke kanan (LIFO)</h4>
        <h5>Posisikan kursor di input text, kemudian gunakan panah kiri dan kanan</h5>
        <table class="myTable">
            <tr>
                <td>
                    <h3>Item Kiri</h3>
                    <ul>
                        <li v-for="(item, idx) in itemLefts" :key="idx">
                            <span><strong>{{ item }}</strong></span>
                        </li>
                    </ul>
                </td>
                <td style="text-align:center">
                    <img src="../assets/left-arrow.png" alt="">&nbsp;
                    <img src="../assets/right-arrow.png" alt=""><br>
                    <input type="text" style="width: 20px"
                        @keydown.left="moveLeft"
                        @keydown.right="moveRight"
                    >
                </td>
                <td>
                    <h3>Item Kanan</h3>
                    <ul>
                        <li v-for="(item, idx) in itemRights" :key="idx">
                            <span><strong>{{ item }}</strong></span>
                        </li>
                    </ul>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'Task7',
    data() {
        return {
            items: [],
            itemLefts: [],
            itemRights: [],
            count: 0
        }
    }, 
    methods: {
        generate: function() {
            this.items = [];

            for (var i = 0; i < this.count; i++) {
                this.items[i] = "Item " + (i + 1);
                
            }
        },
        moveLeft: function() {
            const removedItem = this.items.pop();
            console.log(removedItem);
            this.itemLefts.push(removedItem);
        },
        moveRight: function() {
            const removedItem = this.items.pop();
            console.log(removedItem);
            this.itemRights.push(removedItem);
        }
    }
}
</script>

<style>

</style>
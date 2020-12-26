<template>
    <div>
        <input type="text" v-model="newItem">
        &nbsp;<button @click="addItem">Tambah</button><br>
        <input type="checkbox" v-model="important">&nbsp; Penting
        <div style="color:red;font-size: small;" v-if="isError">Task tidak boleh kosong</div>
        <hr>
        <TodoItem 
            v-on:delete-item="deleteItem"
            v-for="(item, idx) in items" :key="idx" :index="idx" :item="item"></TodoItem>
    </div>
</template>

<script>
import TodoItem from  './TodoItem'

export default {    
    name: 'Todo',
    data() {
        return {
            isError: false,
            important: false,
            newItem: '',
            items: [],
        }
    },
    components: {
        TodoItem
    },
    methods: {
        addItem: function() {
            if(this.newItem.trim() === '') {
                this.isError = true;
                return;
            }

            const item = {
                title: this.newItem,
                important: this.important,
                completed: false,
            }

            this.items.push(item);
            this.newItem = '';
            this.isError = false;
            this.important = false;
        },
        deleteItem: function(index) {
            console.log('delete index:' + index);
            this.items.splice(index, 1);
        }
    }
}
</script>

<style>

</style>
<template>
    <div>
        <input type="text" v-model="newItem">
        &nbsp;
        <button v-if="!editMode" @click="addItem">Tambah</button>
        <button v-if="editMode" @click="updateItem">Update</button><br>
        <input type="checkbox" v-model="important">&nbsp; Penting
        <div style="color:red;font-size: small;" v-if="isError">Task tidak boleh kosong</div>
        <hr>
        <TodoItem 
            v-on:delete-item="deleteItem"
            v-on:edit-item="editItem"
            v-for="(item, idx) in items" :key="idx" :index="idx" :item="item"></TodoItem>
    </div>
</template>

<script>
import TodoItem from  './TodoItem'

export default {    
    name: 'Todo',
    data() {
        return {
            editMode: false,
            editedIndex: -1,
            editedItem: null,
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
        },
        editItem: function(index, item) {
            this.editedIndex = index;
            this.editedItem = item;
            this.editMode = true;
            this.newItem = item.title;
            this.important = item.important;
            console.log(this.editedIndex);
        },
        updateItem: function() {
            if(this.newItem.trim() === '') {
                this.isError = true;
                return;
            }

            const item = {
                title: this.newItem,
                important: this.important,
                completed: this.completed,
            }
            console.log(this.editedIndex);
            this.$set(this.items, this.editedIndex, item);
            this.newItem = '';
            this.isError = false;
            this.important = false;

            this.editedIndex = -1;
            this.editedItem = null;
            this.editMode = false;
        },
    }
}
</script>

<style>

</style>
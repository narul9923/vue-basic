<template>
    <div>
        <div class="navigation">
            <router-link :to="{name: 'completed', params: {items: itemCompleted}}" class="menu-item">Completed</router-link>
            <router-link :to="{name: 'important', params: {items: itemImportant}}" class="menu-item">Important</router-link>
            <router-link :to="{name: 'deleted', params: {items: itemDeleted}}"  class="menu-item">Deleted</router-link>
        </div>
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
            v-on:complete-item="completeItem"
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
            itemDeleted: [],
            itemCompleted: [],
            itemImportant: [],
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
                createdAt: new Date(),
            }
            console.log(item);
            this.items.push(item);

            if(this.important) {
                this.itemImportant.push(item);
            }

            this.newItem = '';
            this.isError = false;
            this.important = false;
        },
        deleteItem: function(index, item) {
            console.log('delete index:' + index);
            this.items.splice(index, 1);
            this.itemDeleted.push(item);
            console.log(this.itemDeleted);
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
                createdAt: this.createdAt,
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
        completeItem: function(index, item) {
            if(item.completed == false) {
                this.itemCompleted.push(item);
            } else {
                this.itemCompleted.splice(index);
            }
        }
    }
}
</script>

<style>
    .menu-item {
        padding: 8px;
        margin: 2px;
        border: 1px solid blue;
        text-decoration: none;
        background: #fff;
        color: #000;
    }

    .navigation { 
        margin-bottom: 20px;
    }
</style>
<template>
    <div>
        <h2>Simple Todo</h2>
        <Todo></Todo>
    </div>
</template>

<script>
import Vue from 'vue';

const TodoItem = Vue.component('TodoItem', {
    props: ['todoItem'],
    template: `
        <li>
            {{ todoItem }}
        </li>
    `
});

const Todo = Vue.component('Todo', {
    template : `
        <div>
            <input type="text" v-model="newItem">
            &nbsp;<button @click="addItem">Tambah</button>
            <div style="color:red;font-size: small;" v-if="isError">Task tidak boleh kosong</div>
            <hr>
            <ul style="list-style:none;padding-inline-start:0px;">
                <TodoItem 
                    style="background-color: #a1c2f7;color:white;padding:5px;margin:2px;font-style:bold"
                    v-for="(item, idx) in items" :key="idx" :todoItem="item"></TodoItem>
            </ul>
        </div>
    `,
    data() {
        return {
            isError: false,
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

            this.items.push(this.newItem);
            this.newItem = '';
            this.isError = false;
        }
    }
});

export default {
    name: 'Task10s5',
    components: {
        Todo
    }
}
</script>

<style>

</style>
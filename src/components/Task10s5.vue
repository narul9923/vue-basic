<template>
    <div>
        <h2>Simple Todo</h2>
        <Todo></Todo>
    </div>
</template>

<script>
import Vue from 'vue';

const TodoItem = Vue.component('TodoItem', {
    template: `
        <li>
            Item
        </li>
    `
});

const Todo = Vue.component('Todo', {
    template : `
        <div>
            <input type="text" v-model="newItem">
            &nbsp;<button @click="addItem">Tambah</button>
            <hr>
            <ul style="list-style:none;padding-inline-start:0px;">
                <TodoItem v-for="(item, idx) in items" :key="idx"></TodoItem>
            </ul>
        </div>
    `,
    data() {
        return {
            newItem: '',
            items: [],
        }
    },
    components: {
        TodoItem
    },
    methods: {
        addItem: function() {
            this.items.push(this.newItem);
            this.newItem = '';
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
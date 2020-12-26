<template>
    <div class="item" :class="{ completed: item.completed }">
        <div class="todo-title">
            <input type="checkbox" @click="completeItem" v-model="item.completed">
            <img src="../../assets/star.png" alt="" v-if="item.important">
            {{ item.title }} <TodoTimestamp :item="item"></TodoTimestamp>
        </div>
        <TodoAction 
            :item="item"
            v-on:edit-item="editItem"
            v-on:delete-item="deleteItem"></TodoAction>
    </div>
</template>

<script>
import TodoAction from './TodoAction'
import TodoTimestamp from './TodoTimestamp'

export default {
    name: 'TodoItem',
    props: ['item','index'],
    components: {
        TodoAction, TodoTimestamp
    },
    methods: {
        deleteItem: function() {
            this.$emit('delete-item', this.index, this.item);
        },
        editItem: function() {
            this.$emit('edit-item', this.index, this.item);
        },
        completeItem: function() {
            this.$emit('complete-item', this.index, this.item);
        }
    }
}
</script>

<style>
    .todo-title {
        float: left;
        width: 96%;
    }
    .item {
        background-color: #a1c2f7;
        color:white;
        padding:5px;
        margin:2px;
        font-style:bold;
    }

    .completed {
        background: #026b09;
    }
</style>
<template>
    <div class="item" :class="{ completed: item.completed }">
        <div class="todo-title">
            <input type="checkbox" v-model="item.completed">
            <img src="../../assets/star.png" alt="" v-if="item.important">
            {{ item.title }}
        </div>
        <TodoAction v-on:delete-item="deleteItem"></TodoAction>
    </div>
</template>

<script>
import TodoAction from './TodoAction'

export default {
    name: 'TodoItem',
    props: ['item'],
    components: {
        TodoAction
    },
    methods: {
        deleteItem: function() {
            this.$emit('delete-item', this.index);
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
<template>
    <div>
        <h2>Completed</h2>
        <TodoItem
            v-for="(item, idx) in items"
            :key="idx"
            :index="idx"
            :item="item"
            v-on:delete-item="deleteItem"
            v-on:edit-item="editItem"
        ></TodoItem>

        <router-link to="/">Kembali</router-link>
    </div>
</template>

<script>
import TodoItem from  './TodoItem'

export default {
    name: 'TodoCompleted',
    props: ['items'],
    components: {
        TodoItem
    }
}
</script>

<style>

</style>
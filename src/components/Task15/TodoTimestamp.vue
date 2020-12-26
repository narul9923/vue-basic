<template>
    <label class="todo-timestamp">{{ createdAt }}</label>
</template>

<script>
import * as timeago from 'timeago.js';

export default {
    name: 'TodoTimestamp',
    props: ['item'],
    data() {
        return {
            createdAt: timeago.format(this.item.createdAt)
        }
    }
}
</script>

<style>
    .todo-timestamp {
        color: grey;
        font-size: 10px;;
    }
</style>
<template>
    <div class="item" :class="{ completed: item.completed }">
        <input type="checkbox" v-model="item.completed">
        <img src="../../assets/star.png" alt="" v-if="item.important">
        {{ item.title }}
    </div>
</template>

<script>
export default {
    name: 'TodoItem',
    props: ['item'],
}
</script>

<style>
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
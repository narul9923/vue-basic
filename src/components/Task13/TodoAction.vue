<template>
    <div class="todo-action">
        <a href="#" @click.prevent="deleteItem"><img src="../../assets/delete.png" alt=""></a>
    </div>
</template>

<script>
export default {
    name: 'TodoAction',
    methods: {
        deleteItem: function(){
            if(confirm('Yakin akan dihapus ??')) {
                this.$emit('delete-item');
            }
        },
    }
}
</script>

<style>
    .todo-action {
        width: 4%;
    }
</style>
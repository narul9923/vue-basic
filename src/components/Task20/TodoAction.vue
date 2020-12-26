<template>
    <div class="todo-action">
        <a v-if="!item.completed" @click.prevent="editItem" href="#"><img src="../../assets/edit.png" alt=""></a>
        <a href="#" @click.prevent="deleteItem"><img src="../../assets/delete.png" alt=""></a>
    </div>
</template>

<script>
export default {
    name: 'TodoAction',
    props:['item'],
    methods: {
        deleteItem: function(){
            if(confirm('Yakin akan dihapus ??')) {
                this.$emit('delete-item');
            }
        },
        editItem: function(){
            this.$emit('edit-item');
        }
    }
}
</script>

<style>
    .todo-action {
        width: 4%;
    }
</style>
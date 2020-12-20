<template>
    <div>
        <p v-if="shouldShow">Hayy!!</p>
        <button v-if="mode == 'add'">Add</button>
        <button v-else-if="mode == 'edit'">Edit</button>
        <button v-else-if="mode == 'delete'">Delete</button>
        <button v-else>View</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            shouldShow: true,
            mode: '',
        }
    }
}
</script>

<style>

</style>
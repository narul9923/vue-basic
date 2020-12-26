<template>
    <div>
        <table border="1">
            <tr>
                <td>Username: </td>
                <td>{{ $route.params.username }}</td>
            </tr>
            <tr>
                <td>Gender: </td>
                <td>{{ $route.params.gender }}</td>
            </tr>
        </table>

        <button @click="$router.go(-1)">Back</button>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
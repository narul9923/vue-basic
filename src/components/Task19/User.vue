<template>
    <div>
        <table border="1">
            <tr>
                <td>Username: </td>
                <td>{{ username }}</td>
            </tr>
            <tr>
                <td>Gender: </td>
                <td>{{ gender }}</td>
            </tr>
        </table>

        <button @click="$router.go(-1)">Backs</button>
    </div>
</template>

<script>
export default {
    name: 'User',
    props: ['username', 'gender']
}
</script>

<style>

</style>
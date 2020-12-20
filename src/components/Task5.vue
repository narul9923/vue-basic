<template>
    <div>
        <input type="text" v-model="firstName">
        <input type="text" v-model="lastName"><br>
        Selamat datang: <strong>{{ firstName + ' ' + lastName }}</strong>
    </div>
</template>

<script>
export default {
    data() {
        return {
            firstName: '',
            lastName: '',
        }
    }
}
</script>
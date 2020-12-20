<template>
    <div>
        <h1>{{ title }}</h1>
        <input type="text" v-model="title">
        <select v-model="selected">
            <option value="" disabled>Choose A fruit</option>
            <option>Apple</option>
            <option>Banana</option>
            <option>Strawberry</option>
        </select>
        {{ selected }}<br>
        <input type="text" v-model="angka1">
        <input type="text" v-model="angka2">
        {{ angka1 * angka2 }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Hello vue',
            selected: null,
            angka1: 0,
            angka2: 0,
        }
    }
}
</script>
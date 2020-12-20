<template>
    <div>
        <ul>
            <li v-for="(value, index) in items" v-bind:key="index">{{ index + '.' + value }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: ['Mangga', 'Sirsak', 'Apel', 'Pepaya'],
        }
    }
}
</script>
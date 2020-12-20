<template>
    <div>
        <h1>{{ title }}</h1>
        <h2>{{ subTitle }}</h2>
        
        <button v-on:click="changeTitle">Ubah Juduls</button>
    </div>
</template>
<script>
export default {
    name: 'Data',
    data() {
        return {
            title: 'Hello World',
            subTitle: 'Sub Title Hello world',
        }
    },
    methods: {
        changeTitle: function(){
            this.title = "Hello Vue js";
        }
    }
}
</script>
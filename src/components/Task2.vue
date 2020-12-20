<template>
    <div>
        <h1>Warna Farovit Saya : <span v-html="favoriteColor"></span></h1>
        <button v-on:click="changeColor('hijau')">Hijau</button>
        <button v-on:click="changeColor('biru')">Biru</button>
        <button v-on:click="changeColor('merah')">Merah</button>
    </div>
</template>
<script>
export default {
    name: 'Task 2',
    data(){
        return{
            favoriteColor: '<font style="color:red">  merah</font>'
        }
    },
    methods:{
        changeColor: function(color){
            var colorCode = '';
            switch (color) {
                case 'hijau':
                    colorCode = 'green';
                    break;
                case 'merah':
                    colorCode = 'red';
                    break;
                case 'biru':
                    colorCode = 'blue';
                    break;
                default:
                    break;
            }

            this.favoriteColor = `<font style="color:${colorCode}">${color}</font>`;
        }
    },
}
</script>
<template>
    <div>
        <h1>Pilih Buah : </h1>
        <ul>
            <li><input v-bind:checked="checked[0]" type="checkbox">Mangga</li>
            <li><input v-bind:checked="checked[1]" type="checkbox">Durian</li>
            <li><input v-bind:checked="checked[2]" type="checkbox">Sirsak</li>
            <li><input v-bind:checked="checked[3]" type="checkbox">Pepaya</li>
            <li><input v-bind:checked="checked[4]" type="checkbox">Rambutan</li>
            <li><input v-bind:checked="checked[5]" type="checkbox">Kelapa</li>
        </ul>
        <button v-on:click="check('ganjil')">Cek Ganjil</button>
        <button v-on:click="check('genap')">Cek Genap</button>
    </div>
</template>

<script>
export default {
    name: 'Task3',
    data() {
        return {
            checked: [false, false, false, false, false, false],
        }
    },
    methods: {
        check: function(tipe) {
            // reset checkbox
            for(var i = 0; i < 6; i++) {
                this.$set(this.checked, i, false);
            }

            // select checkbox
            for(i = 1; i <= 6; i++) {
                if(tipe == 'ganjil' && (i % 2 != 0)) {
                    this.$set(this.checked, i - 1, true);
                }
                
                if(tipe == 'genap' && (i % 2 == 0)) {
                    this.$set(this.checked, i - 1, true);
                }
            }
        }
    }
}
</script>
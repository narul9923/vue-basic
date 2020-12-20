<template>
    <div>
        <table>
            <tr>
                <td>Nama Depan</td>
                <td><input type="text" v-model="firstName" placeholder="Nama depan"></td>
            </tr>
            <tr>
                <td>Nama Belakang</td>
                <td><input type="text" v-model="lastName" placeholder="Nama belakang"></td>
            </tr>
            <tr>
                <td>Jenis Kelamin</td>
                <td>
                    <input type="radio" v-model="gender" value="Pria">&nbsp;Pria<br>
                    <input type="radio" v-model="gender" value="Wanita">&nbsp;Wanita<br>
                </td>
            </tr>
            <tr>
                <td>Hobi</td>
                <td>
                    <input type="checkbox" v-model="hobbies[0]">&nbsp;Membaca<br>
                    <input type="checkbox" v-model="hobbies[1]">&nbsp;Menulis<br>
                    <input type="checkbox" v-model="hobbies[2]">&nbsp;Menggambar<br>
                </td>
            </tr>
        </table>
        <hr>
        <h2>Hasil : </h2>
        <table>
            <tr>
                <td>Icon</td>
                <td>
                    <img v-if="gender == 'Wanita'" src="../assets/woman.png">
                    <img v-if="gender == 'Pria'" src="../assets/man.png">
                </td>
            </tr>
            <tr>
                <td>Nama</td>
                <td><strong>{{ firstName + ' ' + lastName }}</strong></td>
            </tr>
            <tr>
                <td>Hobi</td>
                <td>
                    <ul>
                        <li v-if="hobbies[0]">Membaca</li>
                        <li v-if="hobbies[1]">Menulis</li>
                        <li v-if="hobbies[2]">Menggambar</li>
                    </ul>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'Task6',
    data() {
        return {
            firstName: '',
            lastName: '',
            gender: 'Wanita',
            hobbies: [],
        }
    }
}
</script>

<style>

</style>
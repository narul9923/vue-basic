<template>
    <div>
        <table>
            <tr>
                <td>Username(separate by coma): </td>
                <td><input v-model="usernames" type="text"></td>
            </tr>
            <tr>
                <td>Jenis Kelamin(separete by coma)</td>
                <td><input v-model="genders" type="text"></td>
            </tr>
            <tr>
                <td></td>
                <td><button @click.prevent="generate">Generate</button></td>
            </tr>
        </table>
        <hr>
        <ul>
            <li v-for="(student, idx) in students" :key="idx">
                <router-link :to="'/user/'+student.username + '/' + student.gender">{{ student.username }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Form',
    data() {
        return {
            usernames: '',
            genders: '',
            students: [],
        }
    },
    methods: {
        generate: function() {
            
            this.students = [];
            const usernameList = this.usernames.split(',');
            const genderList = this.genders.split(',');

            for (var i = 0; i < usernameList.length; i++) {
                const student = {
                    username: usernameList[i],
                    gender: genderList[i],
                };

                this.students.push(student);
            }   
        }
    }
}
</script>

<style>

</style>
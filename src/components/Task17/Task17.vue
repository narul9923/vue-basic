<template>
    <div>
        <nav>
            <router-link class="menu-item" to="/home">Home</router-link>
            <router-link class="menu-item" to="/login">Login</router-link>
            <router-link class="menu-item" to="/about">About</router-link>
        </nav>
        <router-view></router-view>
        <div class="navigation">
            <a @click.prevent="goPrev" href="#"><img src="../../assets/left-arrow.png" alt=""></a>&nbsp;
            <a @click.prevent="goNext" href="#"><img src="../../assets/right-arrow.png" alt=""></a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Task16',
    methods: {
        goPrev: function() {
            this.$router.go(-1);
        },
        goNext: function() {
            this.$router.go(1);
        }
    }
}
</script>

<style>
    .menu-item {
        padding: 8px;
        margin: 2px;
        border: 1px solid blue;
        text-decoration: none;
        background: #fff;
        color: #000;
    }

    .router-link-active {
        background: green;
        color: #fff;
    }
</style>
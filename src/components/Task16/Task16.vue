<template>
    <div>
        <nav>
            <router-link class="menu-item" to="/home">Home</router-link>
            <router-link class="menu-item" to="/login">Login</router-link>
            <router-link class="menu-item" to="/about">About</router-link>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Task16'
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
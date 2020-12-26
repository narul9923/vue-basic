<template>
  <div id="app">
    <Task/>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import Task from './components/Task21/Task21.vue'

export default {
  name: 'App',
  components: {
    Task
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

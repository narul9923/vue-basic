import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'
// import Home from './components/Task16/Home'
// import About from './components/Task16/About'
// import Login from './components/Task16/Login'

// task 18 / 19
// import Form from './components/Task19/Form'
// import User from './components/Task19/User'

// task 20 
// import Todo from './components/Task20/Todo'
// import TodoCompleted from './components/Task20/TodoCompleted'
// import TodoImportant from './components/Task20/TodoImportant'
// import TodoDeleted from './components/Task20/TodoDeleted'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)

// const router = new VueRouter({
//   routes: [
//     { path: '/home', component: Home },
//     { path: '/login', component: Login },
//     { path: '/about', component: About }
//   ]
// })

// task 18 
// const router = new VueRouter({
//   routes: [
//     { path: '/', component: Form },
//     { path: '/user/:username/:gender', component: User, props: true },
//   ]
// })

// task 20
// const router = new VueRouter({
//   routes: [
//     { path: '/', component: Todo },
//     { path: '/completed/:items', name: 'completed', component: TodoCompleted, props:true },
//     { path: '/important/:items', name: 'important', component: TodoImportant, props: true },
//     { path: '/deleted/:items', name: 'deleted', component: TodoDeleted, props:true },
//   ],
// });

const store = new Vuex.Store({
  state: {
    name: '',
  },
  mutations: {
    updateName (state, name) {
      state.name = name
    }
  }
});
// this.$store.commit('updateName', value);
new Vue({
  store,
  // router,
  render: h => h(App),
}).$mount('#app')

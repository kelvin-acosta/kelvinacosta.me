// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import store from './store/index'

// Routes
import Home from './pages/Home'

Vue.use(VueRouter)

const routes = [
  {path: '/', component: Home}
  // {path: '/Experience', component: Experience},
  // {path: '/Education', component: Education},
  // {path: '/Skills', component: Skills},
  // {path: '/Projects', component: Projects},
  // {path: '/Contact', component: Contact}
]

const router = new VueRouter({
  history: true,
  hashbang: false,
  routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store
})

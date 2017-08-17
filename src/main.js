import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Home from './components/Home.vue'
import Country from './components/Country.vue'
Vue.use(VueRouter);
const router= new VueRouter({
  routes:[
  {path:'/', component: Home},
  {path:'/country/:code',component:Country}
],
  mode:"history"
});
new Vue({
  el: '#app',

  render: h => h(App),
  router
});

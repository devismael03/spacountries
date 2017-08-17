import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Home from './components/Home.vue'

Vue.use(VueRouter);
const router= new VueRouter({
  routes:[
  {path:'/', component: Home}
],
  mode:"history"
});
new Vue({
  el: '#app',

  render: h => h(App),
  router
});

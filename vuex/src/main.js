import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuex from './vuex.vue'

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

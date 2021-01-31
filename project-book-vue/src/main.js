// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/collapse'

import Vue from 'vue'
import App from './App'
import router from './router'


import Functions from './functions.js'
import { content } from './data/index.js'


window.$ = require('jquery')

// Collect data
window.RootScope = {
	content: content,
	functions: new Functions
}


// Initiate Vue
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})




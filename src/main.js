import Vue from 'vue'


import App from './app.vue'
import router from './router/index'
import store from './store/index'

Vue.config.debug = true

new Vue({
    el: '#app',
    router,
    store,
    render: (h) => h(App)
})
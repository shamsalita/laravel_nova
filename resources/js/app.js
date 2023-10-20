require('./bootstrap');

// Require Vue
// window.Vue = require('vue').default;
// Register Vue Components
// Vue.component('app', require('./components/App.vue').default);
// Initialize Vue
// const app = new Vue({
//     el: '#app',
// });

import Vue from 'vue';
import App from './components/App.vue';
import BootstrapVue from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);


/* router setup */
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import routes from './routes'

const router = new VueRouter({
    mode: 'history',
    base: process.env.MIX_VUE_APP_BASE_URL,
    routes
})
/* router setup end */

import store from './store'

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

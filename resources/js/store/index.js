import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import frameModule from './modules/frame';
import authModule from './modules/auth';

export default new Vuex.Store({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        frame:frameModule,
        auth:authModule
    }
})

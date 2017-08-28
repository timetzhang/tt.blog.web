// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

Vue.use(VueResource);

Vue.config.productionTip = false

//Cookie API
import Cookie from './common/cookie'
Vue.prototype.$cookie = Cookie;

import Db from './common/db'
Vue.prototype.$db = Db;

import Config from '@/common/config'
Vue.prototype.$config = Config;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
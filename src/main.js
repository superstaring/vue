/* jshint esversion: 6 */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from "vue";
import App from "./App";
import router from "./router";
import VueResource from "vue-resource";
import axios from "axios";
// import store from './vuex/Store'     // 普通的
import store from "./vuex/ModuleStore";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;

Vue.use(VueResource);

Vue.prototype.$axios = axios; // 全局定义axios

Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: {
    App
  },
  template: "<App/>",
  store
});

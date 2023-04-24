import Vue from "vue";
import App from "./App";
import router from "./router/index.js";
import {store} from './store/index.js'

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  render: (h) => h(App),
  store, //기본적으로 store라는 속성이 있음 //store: store
  router,
}).$mount("#app");

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSocketIOExt from 'vue-socket.io-extended';
import { io } from 'socket.io-client';

import './registerServiceWorker'
import 'buefy/dist/buefy.css'

const backendURL = "http://localhost:3000";
const socket = io(backendURL);

axios.defaults.baseURL = `${backendURL}/api`;
Vue.config.productionTip = false;

Vue.use(Buefy);
Vue.use(VueAxios, axios);
Vue.use(VueSocketIOExt, socket);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

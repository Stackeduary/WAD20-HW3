import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './App.vue';
import Browse from "./components/Browse";
import Login from "./components/Login";
// import Post from "./models/Post";
// import Profile from "./models/Profile";
// import User from "./models/User";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
  //{path: '/', component: Home},
  {path: '/Login', component: Login},
  {path: '/Browse', component: Browse},
];

const router = new VueRouter({routes});

// maybe instead of cart <-> profile, cart <-> post ????
const store = new Vuex.Store({
  // state: {
  //   profile: new Profile(),
  //   post: new Post(),
  //   user: new User(),
  // },
  // mutations: {
  //   likePost: (state, id) => {
  //
  //   }
  // },
  getters: {

  }
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

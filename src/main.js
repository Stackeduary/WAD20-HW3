import Vue from 'vue';
import App from './App.vue';
// import store from './store'; // not sure if we need this
import Vuex from 'vuex';
import VueRouter from 'vue-router';
//import Post from "./models/Post";
import Browse from "./components/Browse";
import Login from "./components/Login";
//import Profile from "./components/Profile";

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
  state: {
    //profile: new Profile(),
    // users: [
    //   new User("John Doe"),
    //   new User("Gordon Freeman"),
    //   new User("John Doe"),
    //   new User("Bruce Wayne"),
    //   new User("Richard Stallman")
    // ],
    posts: []
  },
  mutations: {
    likePost: (state, id) => {

      let item = state.items[id];
      let index = state.profile.selected.indexOf(id);

      if (index > -1) {
        state.profile.selected.splice(index, 1);
        state.profile.total -= item.price;
        return false;
      }

      state.profile.selected.push(id);
      state.profile.total += item.price;
      return true;
    }
  },
  getters: {
    itemIsSelected: (state) => (id) => {
      return state.profile.selected.indexOf(id) > -1
    }
  }
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

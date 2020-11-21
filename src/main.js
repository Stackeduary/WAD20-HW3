import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './App.vue';
import Browse from "./components/Browse";
import Login from "./components/Login";
import Index from "./components/Index";
import Post from "./models/Post";
import Profile from "./models/Profile";
import User from "./models/User";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
  {path: '/', component: Index},
  {path: '/Login', component: Login},
  {path: '/Browse', component: Browse},
];

const router = new VueRouter({routes});

// maybe instead of cart <-> profile, cart <-> post ????
const store = new Vuex.Store({
   state: {
      profiles: [
        new Profile(1, "John", "Doe", "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80")
      ],
      posts: [
        new Post(1, "Gordon", "Freeman", "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80", "Sep 18, 2020 15:16", "I think it's going to rain", "image", "./assets/images/posts/1.jpg", "15k")
      ],
      users: [
        new User("John", "Doe", "john.doe@example.com", "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80")
      ]
  //   user: new User(),
   },
  // mutations: {
  //   likePost: (state, id) => {

  //   }
  // },
  getters: {
    getPost: (state) => (id) => {
      return state.posts[id]
    }
  }
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

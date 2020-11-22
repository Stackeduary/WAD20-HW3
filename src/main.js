import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './App.vue';
import Browse from "./components/BrowseProfiles";
import Login from "./components/Login";
import Index from "./components/BrowsePosts";
import store from './store'

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
    {path: '/', component: Index},
    {path: '/Login', component: Login},
    {path: '/BrowseProfiles', component: Browse},
    {path: '/BrowsePosts', component: Index},
];

const router = new VueRouter({routes});

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')

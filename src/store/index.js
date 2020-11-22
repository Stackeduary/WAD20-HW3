import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

const state = {
    posts: [],
    users: [],
    activeUser: []
}

const actions = {
    getPosts({ commit }) {
        axios.get('https://private-anon-4a70cf6323-wad20postit.apiary-mock.com/posts')
            .then(response => {
                commit('SET_POSTS', response.data)
            })
    },
    getUsers({ commit }) {
        axios.get('https://private-anon-4a70cf6323-wad20postit.apiary-mock.com/profiles')
            .then(response => {
                commit('SET_USERS', response.data)
            })
    },
    getActiveUser({ commit }) {
        axios.get('https://private-anon-ffc569fdf1-wad20postit.apiary-mock.com/users/1')
            .then(response => {
                commit('SET_ACTIVE_USER', response.data)
            })
    }
}

const mutations = {
    SET_POSTS(state, posts) {
        state.posts = posts
    },
    SET_USERS(state, users) {
        state.users = users
    },
    SET_ACTIVE_USER(state, activeUser) {
        state.activeUser = activeUser
    }
}

export default new Vuex.Store({
    state,
    actions,
    mutations
})
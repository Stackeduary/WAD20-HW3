import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

const state = {
    posts: [],
    users: []
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
    }
}

const mutations = {
    SET_POSTS(state, posts) {
        state.posts = posts
    },
    SET_USERS(state, users) {
        state.users = users
    }
}

export default new Vuex.Store({
    state,
    actions,
    mutations
})
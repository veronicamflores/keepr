import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'

Vue.use(Vuex)

let auth = Axios.create({
  baseURL: "//localhost:5000/account/",
  timeout: 3000,
  withCredentials: true
})

let api = Axios.create({
  baseURL: "//localhost:5000/api/",
  timeout: 3000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    user: {},
    keeps: [],
    userKeeps: [],
    vaults: []
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setKeeps(state, keeps) {
      state.keeps = keeps
    },
    setUserKeeps(state, userkeeps) {
      state.userKeeps = userkeeps
    },
    setUserVaults(state, vaults) {
      state.vaults = vaults
    }
  },
  actions: {
    register({ commit, dispatch }, newUser) {
      auth.post('register', newUser)
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'home' })
          dispatch('GetUserKeeps', res.data.id)
          dispatch('GetUserVaults', res.data.id)
        })
        .catch(e => {
          console.log('[registration failed] :', e)
        })
    },
    authenticate({ commit, dispatch }) {
      auth.get('authenticate')
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'home' })
          dispatch('GetUserKeeps', res.data.id)
          dispatch('GetUserVaults', res.data.id)
        })
        .catch(e => {
          console.log('not authenticated')
        })
    },
    login({ commit, dispatch }, creds) {
      auth.post('login', creds)
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'home' })
          dispatch('GetUserVaults', res.data.id)
          dispatch('GetUserKeeps', res.data.id)
        })
        .catch(e => {
          console.log('Login Failed')
        })
    },

    // ALL Keeps
    getAllKeeps({ commit, dispatch }) {
      api.get("keeps")
        .then(res => {
          commit("setKeeps", res.data)
        })
    },

    //USER Keeps
    getUserKeeps({ commit }, userId) {
      api.get("keeps/" + userId)
        .then(res => {
          commit("setUserKeeps", res.data)
        })
    },

    //User Vaults
    GetVaults({ commit }, userId) {
      api.get("vaults/" + userId)
        .then(res => {
          commit("SetUserVaults", res.data)
        })
    }
  }
})
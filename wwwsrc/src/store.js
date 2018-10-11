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
  timeout: 5000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    user: {},
    keeps: [],
    userKeeps: [],
    vaults: [],
    vaultKeeps: {}
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
    },
    setVaultKeeps(state, data) {
      Vue.set(state.vaultKeeps, data.vaultId, data.keeps);
    }
  },
  actions: {
    register({ commit, dispatch }, newUser) {
      auth.post('register', newUser)
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'profile' })
        })
        .catch(e => {
          console.log('[registration failed] :', e)
        })
    },
    authenticate({ commit, dispatch }) {
      auth.get('authenticate')
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'profile' })
        })
        .catch(e => {
          console.log('not authenticated')
        })
    },
    login({ commit, dispatch }, creds) {
      auth.post('login', creds)
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'profile' })
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
    createKeeps({ dispatch }, keepData) {
      api.post("keeps", keepData)
        .then(res => {
          dispatch("getUserKeeps", keepData.userId)
        })
    },
    deleteKeeps({ dispatch }, keepData) {
      api.delete("keeps/" + keepData.id, keepData.id)
        .then(res => {
          dispatch("getUserKeeps", keepData.userId)
        })
    },
    //User Vaults
    getUserVaults({ commit }, userId) {
      api.get("vaults/" + userId)
        .then(res => {
          commit("setUserVaults", res.data)
        })
    },
    createVaults({ dispatch }, vaultData) {
      api.post("vaults", vaultData)
        .then(res => {
          dispatch("getUserVaults", vaultData.userId)
        })
    },
    deleteVaults({ dispatch }, vaultData) {
      api.post("vaults/" + vaultData.id, vaultData.id)
        .then(res => {
          dispatch("getUserVaults", vaultData.userId)
        })
    },
    //Get Vault Keeps
    getVaultKeeps({ commit }, vaultId) {
      api.get("keeps/vault/" + vaultId)
        .then(res => {
          commit("setVaultKeeps", { vaultId, keeps: res.data })
        })
    },
    //add a keep to a vault
    makeVaultKeeps({ dispatch }, vaultKeepData) {
      api.post("keeps/vaultkeeps/", vaultKeepData)
        .then(res => {
          dispatch("getVaultKeeps", vaultKeepData.vaultId)
        })
    },
    //remove a keep from a vault
    deleteVaultKeeps({ dispatch }, vaultKeepData) {
      api.delete("keeps/vaultkeeps/" + vaultKeepData.id, vaultKeepData.id)
        .then(res => {
          dispatch("getVaultKeeps", vaultKeepData.vaultId)
        })
    }

  }
})
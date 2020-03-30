export const state = () => ({
  token: null
})

export const mutations = {
  setToken (state, token) {
    state.token = token
  },

  clearToken (state) {
    state.token = null
  }
}

export const actions = {
  async login ({ commit, dispatch }, loginData) {
    const token = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('mock-token')
      }, 3000)
    })

    dispatch('setToken', token)
  },

  setToken ({ commit }, token) {
    commit('setToken', token)
  },

  logout ({ commit }) {
    commit('clearToken')
  }
}

export const getters = {
  isAuthenticated: state => Boolean(state.token)
}

export const state = () => ({
  token: true
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
    try {
      const token = await new Promise((resolve, reject) => {
        setTimeout(() => {
          // eslint-disable-next-line prefer-promise-reject-errors
          reject('mock-token')
        }, 3000)
      })
      dispatch('setToken', token)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },

  setToken ({ commit }, token) {
    commit('setToken', token)
  },

  logout ({ commit }) {
    commit('clearToken')
  },

  createUser ({ commit }, user) {
    try {
      console.log('Create user')
    } catch (e) {
      console.log(e)
    }
  }
}

export const getters = {
  isAuthenticated: state => Boolean(state.token)
}
import Cookie from 'cookie'
import Cookies from 'js-cookie'
import JWTDecode from 'jwt-decode'

function isJWTValid (token) {
  if (!token) {
    return false
  }

  const JWTData = JWTDecode(token) || {}
  const expires = JWTData.exp || 0

  return (new Date().getTime() / 1000) < expires
}

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
  async login ({ commit, dispatch }, login) {
    try {
      const { token } = await this.$axios.$post('/api/auth/admin/login', login)
      dispatch('setToken', token)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },

  autoLogin ({ dispatch }) {
    const cookieStr = process.browser
      ? document.cookie
      : this.app.context.req.headers.cookie

    const cookies = Cookie.parse(cookieStr || '') || {}
    const token = cookies['jwt-token']

    if (isJWTValid(token)) {
      dispatch('setToken', token)
    } else {
      dispatch('logout')
    }
  },

  setToken ({ commit }, token) {
    this.$axios.setToken(token, 'Bearer')
    commit('setToken', token)
    Cookies.set('jwt-token', token)
  },

  logout ({ commit }) {
    this.$axios.setToken(false)
    commit('clearToken')
    Cookies.remove('jwt-token')
  },

  async createUser ({ commit }, user) {
    try {
      await this.$axios.$post('/api/auth/admin/create-user', user)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  }
}

export const getters = {
  isAuthenticated: state => Boolean(state.token),
  token: state => state.token
}

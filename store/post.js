export const actions = {
  async fetch ({ commit }) {
    try {
      return await this.$axios.$get('/api/post')
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },

  async fetchById ({ commit }, id) {
    try {
      return await this.$axios.$get(`/api/post/${id}`)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },

  async fetchAdmin ({ commit }) {
    try {
      return await this.$axios.$get('/api/post/admin')
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },

  async remove ({ commit }, id) {
    try {
      return await this.$axios.$delete(`/api/post/admin/${id}`)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },

  async update ({ commit }, { text, id }) {
    try {
      return await this.$axios.$put(`/api/post/admin/${id}`, { text })
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },

  async fetchAdminById ({ commit }, id) {
    try {
      return await this.$axios.$get(`/api/post/admin/${id}`)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },

  async create ({ commit }, { title, text, image }) {
    try {
      const post = new FormData()
      post.append('title', title)
      post.append('text', text)
      post.append('image', image, image.name)

      return await this.$axios.$post('/api/post/admin', post)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },

  async addView ({ commit }, { views, _id }) {
    try {
      return await this.$axios.$put(`/api/post/add/view/${_id}`, { views })
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  }
}

export const actions = {
  async create ({ commit }, comment) {
    try {
      return await this.$axios.$post('/api/comment', comment)
    } catch (e) {
      commit('setError', e, { root: true })
    }
  }
}

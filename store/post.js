export const actions = {
  async fetchAdmin ({ commit }) {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([{
          title: 'Post',
          date: new Date(),
          views: 0,
          comments: [],
          _id: 123123
        }])
      }, 1000)
    })
  },

  remove ({ commit }, id) {
    console.log(`Post ${id} deleted`)
  }
}

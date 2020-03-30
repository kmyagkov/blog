const posts = [
  {
    title: 'Post 1',
    date: new Date(),
    views: 0,
    comments: [],
    _id: '1'
  },
  {
    title: 'Post 2',
    date: new Date(),
    views: 0,
    comments: [],
    _id: '2'
  }
]

export const actions = {
  async fetchAdmin ({ commit }) {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(posts)
      }, 1000)
    })
  },

  remove ({ commit }, id) {
    console.log(`Post ${id} deleted`)
  },

  update ({ commit }, { text, id }) {
    console.log('update')
  },

  async fetchAdminById ({ commit }, id) {
    return await new Promise((resolve, reject) => {
      console.log(posts.find(post => post._id === id))
      setTimeout(() => {
        resolve(posts.find(post => post._id === id))
      }, 1000)
    })
  }
}

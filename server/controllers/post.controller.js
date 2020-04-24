const Post = require('../models/post.model')

module.exports.create = async (request, response) => {
  try {
    const post = new Post({
      title: request.body.title,
      text: request.body.text,
      imageURL: request.body.imageURL
    })

    console.log(request)

    await post.save()
    console.log('ctr ok')
    response.status(201).json(post)
  } catch (e) {
    console.log('ctr not ok')
    response.status(500).json(e)
  }
}

module.exports.getAll = async (request, response) => {
  try {
    const posts = await Post.find().sort({ date: -1 })
    response.json(posts)
  } catch (e) {
    response.status(500).json(e)
  }
}

module.exports.getById = async (request, response) => {
  try {
    await Post.findById(request.params.id).populate('comments').exec((error, post) => {
      try {
        response.json(post)
      } catch (e) {
        error(e)
      }
    })
  } catch (e) {
    response.status(500).json(e)
  }
}

module.exports.edit = async (request, response) => {
  const $set = {
    text: request.body.text
  }

  try {
    const post = await Post.findOneAndUpdate({
      _id: request.params.id
    }, { $set }, { new: true })
    response.json(post)
  } catch (e) {
    response.status(500).json(e)
  }
}

module.exports.remove = async (request, response) => {
  try {
    await Post.deleteOne({ _id: request.params.id })
    response.json({ message: 'Post deleted' })
  } catch (e) {
    response.status(500).json(e)
  }
}

module.exports.addView = async (request, response) => {
  const $set = {
    views: ++request.body.views
  }

  try {
    await Post.findOneAndUpdate({
      _id: request.params.id
    }, { $set })
    response.status(204).json()
  } catch (e) {
    response.status(500).json(e)
  }
}

module.exports.getAnalytics = async (request, response) => {
  try {
    const posts = await Post.find()
    const labels = posts.map(post => post.title)
    const json = {
      comments: {
        labels,
        data: posts.map(post => post.comments.length)
      },
      views: {
        labels,
        data: posts.map(post => post.views)
      }
    }
    response.json(json)
  } catch (e) {
    response.status(500).json(e)
  }
}

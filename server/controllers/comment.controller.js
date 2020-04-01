const Comment = require('../models/comment.model')
const Post = require('../models/post.model')

module.exports.create = async (request, response) => {
  try {
    const { name, text, postId } = request.body
    const comment = new Comment({ name, text, postId })
    const post = await Post.findById(postId)

    await comment.save()
    post.comments.push(comment._id)
    await post.save()

    response.status(201).json(comment)
  } catch (e) {
    response.status(500).json(e)
  }
}

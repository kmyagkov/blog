const bcrypt = require('bcrypt-nodejs')
const jwt = require('jsonwebtoken')
const keys = require('../keys')
const User = require('../models/user.model')

module.exports.login = async (request, response) => {
  const candidate = await User.findOne({ name: request.body.name })

  if (candidate) {
    const isPasswordCorrect = bcrypt.compareSync(request.body.password, candidate.password)

    if (isPasswordCorrect) {
      const token = jwt.sign({
        name: candidate.name,
        userId: candidate._id
      }, keys.JWT, { expiresIn: 60 * 60 })

      response().json({ token })
    } else {
      response(401).json({ message: 'Wrong password' })
    }
  } else {
    response.status(404).json({ message: 'User not found' })
  }
}

module.exports.createUser = async (request, response) => {
  const candidate = await User.findOne({ name: request.body.name })

  if (candidate) {
    response(409).json({ message: 'User already exists' })
  } else {
    const salt = bcrypt.genSaltSync(10)
    const user = new User({
      login: request.body.name,
      password: bcrypt.hashSync(request.body.password, salt)
    })

    await user.save()
    response.status(201).json(user)
  }
}

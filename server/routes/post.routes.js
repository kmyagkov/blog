const passport = require('passport')
const { Router } = require('express')
const controller = require('../controllers/post.controller')
const router = Router()

router.post('/admin',
  passport.authenticate('jwt', { session: false }),
  controller.create
)

router.get('/admin',
  passport.authenticate('jwt', { session: false }),
  controller.getAll
)

router.get('/admin/:id',
  passport.authenticate('jwt', { session: false }),
  controller.getById
)

router.put('/admin/:id',
  passport.authenticate('jwt', { session: false }),
  controller.edit
)

router.delete('/admin/:id',
  passport.authenticate('jwt', { session: false }),
  controller.remove
)

router.get(
  '/admin/get/analytics',
  passport.authenticate('jwt', { session: false }),
  controller.getAnalytics
)

router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.put('/add/view/:id', controller.addView)

module.exports = router

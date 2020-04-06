const path = require('path')
const multer = require('multer')
const moment = require('moment')

const storage = multer.diskStorage({
  destination (request, file, cb) {
    cb(null, path.resolve(__dirname, '../..', 'static', 'images'))
  },

  filename (request, file, cb) {
    cb(null, `${moment().format('DDMMYYYY-HHmmss_SSS')}-${file.originalname}`)
  }
})
const fileFilter = (request, file, cb) => {
  const isFileValid = file.mimetype === 'image/png' || file.mimetype === 'image/jpeg'
  cb(null, isFileValid)
}

module.exports = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 5
  }
})

const path = require('path')
const multer = require('multer')
const moment = require('moment')

const storage = multer.diskStorage({
  destination (request, file, cb) {
    cb(null, path.resolve(__dirname, '../..', 'static'))
  },

  filename (request, file, cb) {
    cb(null, `${file.originalname}-${moment().format('DDMMYYYY-HHmmss_SSS')}`)
  }
})
const fileFilter = (request, file, cb) => {
  const isFileValid = file.mimeType === 'image/png' || file.mimeType === 'image/jpeg'
  cb(null, isFileValid)
}

module.exports = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 5
  }
})

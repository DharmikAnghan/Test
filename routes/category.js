var express = require('express');
const multer = require('multer');
var router = express.Router();


// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  var upload = multer({ storage: storage })



var { add_category , view_category } = require('../controller/CategoryController');

router.post('/',upload.single('images'),add_category);

router.get('/',view_category);

module.exports = router;

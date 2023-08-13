var express = require('express');
const multer = require('multer');
var router = express.Router();

var { add_puzzle , view_puzzle,category_puzzle , level_puzzle} = require('../controller/PuzzleController');

// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/puzzle_image')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  var upload = multer({ storage: storage })


router.post('/:cat_id',upload.single('images'),add_puzzle);

router.get('/',view_puzzle);
router.get('/:cat_id',category_puzzle);
router.get('/:cat_id/:level_no',level_puzzle);


module.exports = router;

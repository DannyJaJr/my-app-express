var express = require('express');
var router = express.Router();

// let index = require('../controllers/index')
// /* GET home page. */
// router.get('/', index.index );



let landing = require('../controllers/landing')
/* GET home page. */
router.get('/', landing.get_landing);

module.exports = router;

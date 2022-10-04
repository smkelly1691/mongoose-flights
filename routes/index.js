var express = require('express');
var router = express.Router();
const indexCtrlr = require('../controllers/index');

/* GET home page. */
router.get('/', indexCtrlr.index);

module.exports = router;

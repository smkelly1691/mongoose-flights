var express = require('express');
var router = express.Router();
const indexCtrlr = require('../controllers/index');

/* Go directly to Index view. */
router.get('/', function(req, res, next) {
  res.redirect('/flights');
});

module.exports = router;

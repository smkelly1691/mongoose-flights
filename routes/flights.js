const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

// All the routes already start with '/flights'
router.get('/new', flightsCtrl.new);
router.post('/', flightsCtrl.create);
router.get('/', flightsCtrl.index);
router.get('/:id', flightsCtrl.show);
router.post('/:id', flightsCtrl.addDestination);
router.delete('/id', flightsCtrl.deleteFlight);
router.post('/:id/ticket', flightsCtrl.addTicket);


module.exports = router;
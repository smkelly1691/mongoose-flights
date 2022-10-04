const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    show,
    new: newFlight,
    create, 
    addDestination,
    deleteFlight, 
    addTicket
};

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { title: 'All Flights', flights});
    });
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        res.render('flights/show', {title: 'Flight Detail', flight });
    });
}

function newFlight(req, res) {
    res.render('flights/new', {title: 'Add Flight'})
}

function create(req, res) {
    for(let key in req.body) {
        if(req.body[key] === '') delete req.body[key]
    }
    const flight = new Flight(req.body)
    flight.save(function(err) {
        if(err) {
            console.log(err)
            return res.redirect('/flights/new');
        }
        res.redirect('/flights')
    })
}

function addDestination(req, res, next) {
    Flight.findById(req.params.id, function(err, flight) {
        flight.destinations.push(req.body);
        flight.save(function(err, flight) {
            res.redirect(`/flights/$(flight._id}`);
        });
    });
}

function deleteFlight(req, res) {
    Flight.findByIdAndDelete(req.params.id, function(err, flight) {
        if(err) return res.redirect('flights');
            console.log(flight);
        res.redirect('flights');
    });
};

function addTicket(req, res, next) {
    const seat = req.body.seat;
    const price = req.body.price;
    const flight = req.params.id;
    const ticket = new Ticket({seat, price, flight});
    ticket.save(function(err) {
        if (err) return res.render('flights/new');
        res.redirect(`/flights/${req.params.id}`)
    });
};
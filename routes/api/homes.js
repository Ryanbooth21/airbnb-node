const express = require('express');
const router = express.Router();

// Homes Model

const Home = require('../../models/homes');

// @route GET api/homes
// @description Get All Items
// @access Public

router.get('/', (req, res) => {
   Home.find()
    .then(homes => res.json(homes))
});

// @route POST api/homes
// @description POST Items
// @access Public

router.post('/', (req, res) => {
    const newHome = new Home({
        title: req.body.title,
        type: req.body.type,
        price: req.body.price,
        guests: req.body.guests,
        bedroom: req.body.bedroom,
        bath: req.body.bath,
        wifi: req.body.wifi,
        freeparking: req.body.freeparking,
        kitchen: req.body.kitchen,
        img: req.body.img,
    });
    newHome.save().then(home => res.json(home))
 });

// @route DELETE api/homes
// @description DELETE Items
// @access Public

 router.delete('/:id', (req, res) => {
   Home.findById(req.params.id)
    .then(home => home.remove().then(()=> res.json({sucess: true})))
    .catch(err => res.status(404).json({sucess: false}))
 })
 

module.exports = router;
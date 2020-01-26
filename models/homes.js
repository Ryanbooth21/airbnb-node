const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const HomeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    guests: {
        type: Number,
        required: true
    },
    bedroom: {
        type: Number,
        required: true
    },
    bath: {
        type: Number,
        required: true
    },
    wifi: {
        type: Boolean,
        default: false,
        required: true
    },
    freeparking: {
        type: Boolean,
        default: false,
        required: true
    },
    kitchen: {
        type: Boolean,
        default: false,
        required: true
    },
    img: {
        type: String,
        required: true
    }
})

module.exports = Home = mongoose.model('home', HomeSchema);
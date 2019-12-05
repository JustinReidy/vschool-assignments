const mongoose = require('mongoose')
const Schema = mongoose.Schema

const placeSchema = new Schema({
    place: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        default: 0
    },
    timeToGo: String,
    sitesToExplore: [String]
})

module.exports = mongoose.model('Place', placeSchema)
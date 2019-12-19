const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ticketSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    problem: {
        type: String,
        required: true
    },
    severity: {
        type: String,
        default: "Medium"
    },
    company: {
        type: String,
    },
    completed: {
        type: Boolean,
        default: false
    },
    paid: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Ticket', ticketSchema)
const express = require("express")
const ticketRouter = express.Router()
const Ticket = require('../models/ticket')

ticketRouter.get("/", (req, res, next) => {
    Ticket.find((err, tickets) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(tickets)
    })
})

ticketRouter.get("/user", (req, res, next) => {
    Ticket.find({owner: req.user._id}, (err, userTickets) => {
        if(err){
            res.status(500)
            return next(err)
        }

        return res.status(200).send(userTickets)
    })
})

ticketRouter.delete("/:_id", (req, res, next) => {
    Ticket.findOneAndDelete(
        {_id: req.params._id},
        (err, ticket) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(ticket)
        }
    )
})

ticketRouter.post("/", (req, res, next) => {
    req.body.owner = req.user._id
    const newTicket = new Ticket(req.body)
    newTicket.save((err, savedTicket) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedTicket)
    })
})

module.exports = ticketRouter
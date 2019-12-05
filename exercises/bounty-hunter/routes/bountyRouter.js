const express = require('express')
const bountyRouter = express.Router()
const Bounty = require('../models/Bounty')

bountyRouter.route('/')
    .get((req, res) => {
        Bounty.find((err, bounties) => {
            if(err) return res.status(500).send(err)
            return res.status(200).send(bounties)
        })
    })

    .post((req, res) => {
        const newBounty = new Bounty (req.body)
        newBounty.save((err, bounty) => {
            if(err) return res.status(500).send(err)
            return res.status(201).send(bounty)
        })
    })

bountyRouter.route('/:_id')

    .get((req, res) => {
        Bounty.findById(req.params._id, (err, bounty) => {
            if(err) return res.status(500).send(err)
            return res.status(201).send(bounty)
        })
    })

    .put((req, res) => {
        Bounty.findOneAndUpdate(
            {_id: req.params._id},
            req.body,
            {new: true},
            (err, bounty) => {
                if(err) return res.status(500).send(err)
                return res.status(200).send(bounty)
            }
        )
    })

    .delete((req, res) => {
        Bounty.findOneAndDelete(
            {_id: req.params._id},
            (err, bounty) => {
                if(err) return res.status(500).send(err)
                return res.status(204).send(bounty)
            }
        )
    })

    module.exports = bountyRouter
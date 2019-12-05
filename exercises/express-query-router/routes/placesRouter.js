const express = require('express')
const placeRouter = express.Router()
const Place = require('../models/Place')

placeRouter.route('/')

    .get((req, res) => {
        Place.find((err, places) => {
            if(err) return res.status(500).send(err)
            return res.status(200).send(places)
        })
    })

    .post((req, res) => {
        const newPlace = new Place (req.body)
        newPlace.save((err, place) => {
            if(err) return res.status(500).send(err)
            return res.status(201).send(place)
        })
    })

placeRouter.route('/:_id')

    .get((req, res) => {
        Place.findById(req.params._id, (err, place) => {
            if(err) return res.status(500).send(err)
            return res.status(200).send(place)
        })
    })

    .put((req,res) => {
        Place.findOneAndUpdate{
            {_id: req.params._id},
            req.body,
            {new: true},
            (err, place) => {
                if(err) return res.status(500).send(err)
                return res.status(200).send(place)
            }
        }
    })

    .delete((req, res) => {
        Place.findOneAndDelete{
            {_id: req.params._id}
            (err, place) => {
                if(err) return res.status(500).send(err)
                return res.status(200).send(place)
            }
        }
    })

    module.exports = placeholder 
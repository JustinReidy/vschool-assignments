const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://localhost:27017/vacationPlanner', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('MongoDB is Connected')
    })
    .catch(err => {
        console.log(err)
    })

    app.listen(1337, () => {
        console.log("App running on port: 1337")
    })
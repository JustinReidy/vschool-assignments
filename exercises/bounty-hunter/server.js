const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = 8080


app.use(express.json())

app.use('/bounty', require('./routes/bountyRouter'))

mongoose.connect('mongodb://localhost:27017/bounties', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('MongoDB is Connected')
    })
    .catch(err => {
        console.log(err)
    })

app.listen(PORT, () => {
    console.log("App is running on port " + PORT)
})
const express = require('express')
const app = express()
const morgan = require("morgan")
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan('dev'))


mongoose.connect("mongodb://localhost:27017/raddish", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
},
() => console.log("Connected to DB"))

//Routes

app.use("/auth", require('./routes/authRouter.js'))

//Err handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
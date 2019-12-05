const express = require("express")
const database = require('./database.json')

const app = express()
const PORT = 8080

app.use(express.json())

app.get('/item', (req, res) => {
    if(req.query.type){
        res.send(database.filter(type => type.type === req.query.type))
    }
})

app.listen(PORT, () => {
    console.log("App running on port: " + PORT)
})
const express = require("express")
const authRouter = express.Router()
const User = require('../models/user.js')



authRouter.post("/signup", (req, res, next) => {

    User.findOne({username: req.body.username}, (err, user) => {
        if(err){
            res.status(500)
            return next(err)
        }
        if(user){
            res.status(400)
            return next(new Error("That username is already taken?!"))
        }
        const newUser = new User(req.body)
        newUser.save((err, savedUser) => {
            if(err){
                res.status(500)
                return next(err)
            }
            
        })
    })

})







module.exports = authRouter
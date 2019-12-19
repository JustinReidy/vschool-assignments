const express = require("express")
const authRouter = express.Router()
const User = require('../models/user.js')
const jwt = require("jsonwebtoken")

authRouter.post("/signup", (req, res, next) => {
    console.log("Server Signup")
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
        console.log(newUser)
        newUser.save((err, savedUser) => {
            if(err){
                res.status(500)
                return next(err)
            }
    
            const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET)
            return res.status(201).send({user: savedUser.withoutPassword(), token})
        })
    })
})

//LOGIN
authRouter.post('/login', (req, res, next) => {
    User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
        if(err){
            res.status(500)
            return next(err)
        }
        if(!user){
            res.status(401)
            return next(new Error("Username and or Password are incorrect"))
        }
        user.checkPassword(req.body.password, (err, isMatch) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            if(!isMatch){
                res.status(401)
                return next(new Error("Username and or Password are incorrect"))
            }
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
            return res.status(200).send({user: user.withoutPassword(), token})
        })
        

    })
})



module.exports = authRouter
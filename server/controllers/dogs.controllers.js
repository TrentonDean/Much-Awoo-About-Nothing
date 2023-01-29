const Dog = require('../models/Dog')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET_KEY

module.exports = {
    createDog: (req,res) => {
        const user = jwt.verify(req.cookies.userToken, SECRET);
        Dog.create({ ...req.body, owner: user})
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            console.log(err)
            res.status(400).json(err)
        })
    },

    getDogsByUser: (req, res) => {
        const user = jwt.verify(req.cookies.userToken, SECRET);
        Dog.find({ owner: user._id })
            .populate('owner', 'firstName lastName')
            .then((result) => {
                res.json(result)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },

    updateDog: (req,res) => {
        Dog.updateOne({_id:req.params.id}, req.body, {runValidators:true})
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            console.log(err)
            res.status(400).json(err)
        })
    },

    deleteDog: (req,res) => {
        Dog.deleteOne({_id:req.params.id})
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            console.log(err)
            res.status(400).json(err)
        })
    }
}
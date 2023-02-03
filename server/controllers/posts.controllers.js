const Post = require('../models/Post')

module.exports = {

    composePost: (req,res) => {
        Post.create(req.body)
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            console.log(err)
            res.status(400).json(err)
        })
    },

    getAllPosts: (req,res) => {
        Post.find()
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            console.log(err)
            res.status(400).json(err)
        })
    },

    getOnePost: (req,res) => {
        Post.findById(req.params.id)
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            console.log(err)
            res.status(400).json(err)
        })
    },

    updatePost: (req,res) => {
        Post.updateOne({_id:req.params.id},req.body,{runValidators:true})
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            console.log(err)
            res.status(400).json(err)
        })
    },

    deletePost: (req,res) => {
        console.log(req.params.id)
        Post.deleteOne({_id:req.params.id})
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            console.log(err)
            res.status(400).json(err)
        })
    }
}
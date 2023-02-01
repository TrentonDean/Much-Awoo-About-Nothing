const PostController = require('../controllers/posts.controllers')
const {authenticate} = require('../config/jwt.config')

module.exports = (app) => {
    app.post('/api/composePost', PostController.composePost)
    app.get('/api/getAllPosts', PostController.getAllPosts)
    app.get('/api/getOnePost/:id', authenticate, PostController.getOnePost)
    app.put('/api/updatePost/:id', authenticate, PostController.updatePost)
    app.delete('/api/deletePost/:id', authenticate, PostController.deletePost)
}
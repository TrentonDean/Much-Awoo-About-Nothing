const mongoose = require("mongoose")

const PostSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Your post must have a title"],
            minLength: [2, "Post title must be at least two (2) characters"]
        },
        body: {
            type: String,
            required: [true, "Your post must have a body"],
            minLength: [10, "Post body must be at least ten (10) characters"]
        },
        tags: {                                             // subject to change if group doesn't like the way it's set up
            type: String,
            required: [true, "Your post must have a tag"],
            enum: [
                'Tips and Tricks',
                'Wholesome',
                'Training',
                'Dog Health',
                'Dog Products'
            ]
        }
    }, {timestamps: true});

const Post = mongoose.model('Post', PostSchema)

module.exports = Post
const mongoose = require("mongoose")                        // Done by Trenton

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
            required: [true, "Your post must have at least one (1) tag"],
            minLength: [2, "Post tags must be at least two (2) characters"]
        }
    }, {timestamps: true});

const Post = mongoose.model('Post', PostSchema)

module.exports = Post
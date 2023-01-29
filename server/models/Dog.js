const mongoose = require("mongoose")                        // Done by Trenton

const DogSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Dog must have a name"],
            minLength: [2, "Dog name must be at least two (2) characters"]
        },
        breed: {
            type: String,
            required: [true, "Dog must have a breed"],
            minLength: [2, "Dog breed must be at least two (2) characters"]
        },
        bio: {
            type: String,
            required: [true, "Dog must have a bio"],
            minLength: [10, "Dog bio must be at least ten (10) characters"]
        },
        tricks: {
            type: String
        },
        owner: {                                                // Dog model accepting a user model object as an owner
            type: [mongoose.Schema.Types.ObjectId],
            ref: 'User'
        }
    }, {timestamps: true});

const Dog = mongoose.model('Dog', DogSchema)

module.exports = Dog
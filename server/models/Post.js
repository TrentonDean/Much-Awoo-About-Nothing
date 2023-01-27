const mongoose = require("mongoose")

const UserSchema = mongoose.Schema(
    {
        firstName: {
            type:String,
            required:[true, "You must enter a first name."],
            minLength:[2, "First name must be at least two (2) characters long."]
        },
        lastName: {
            type: String,
            required: [true, "You must enter a last name."],
            minLength: [2, "Last name must be at least two (2) characters long."]
        },
        email: {
            type:String,
            required: [true, "You must enter an email address."],
            
        }
    }
)
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

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
            minLength: [8, "Email address must be at least eight (8) characters long."]
        },
        password: {
            type:String,
            required: [true, "You must enter a password."],
            minLength: [5, "Passwords must be at least five (5) characters long."]
        },
        dogs: [{                                                // User model accepting an array of dog objects
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Dog'
        }],
        profilePic: {
            type: String
        }
    }, {timestamps: true});

UserSchema.pre("save", async function(next){
    try{
        const hashedPassword = await bcrypt.hash(this.password, 10)
        this.password = hashedPassword
        next()
    }catch{
        console.log("Error in password save.")
    }
})

UserSchema.virtual("confirmPassword")
    .get(()=> this._confirmPassword)
    .set(value=> this._confirmPassword = value)

UserSchema.pre("validate", function(next){
    if (this.password !==this.confirmPassword){
        this.invalidate("confirmPassword", "Password and Confirm Password must match!")
    }
    next();
});
module.exports = mongoose.model("User", UserSchema)
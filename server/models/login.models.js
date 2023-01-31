const mongoose = require('mongoose')

const loginSchema = mongoose.Schema({

    firstName: {
        type: String,
        required: [true, "First Name is required"],
        minLength:[2, "First name must be at least two (2) characters long."]
    },

    lastName: {

        type: String,
        required: [true, "Last name is required"],
        minLength:[2, "Last name must be at least two (2) characters long."]
    },

    email: {
        type: String,
        required: [true, "Email is required!"]
    },

    password: {
        type: String,
        minLength: [7, "Password must be more then 7 characters"]
    },

    dogs: [{                                                // User model accepting an array of dog objects
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dog'
    }],

    profilePic: {
        type: String
    }

}, {timeStamp: true})


Schema.virtual('confirmP')
    .get( () => this._confirmP )
    .set( e => this._confirmP = e );
Schema.pre('validate', function(next){
    if (this.password !== this.confirmP) {
        this.invalidate('confirmP', 'Passwords must match!!')
    }
    next()
})




// SAVE ENCRYPTED PASSWORD
Schema.pre('save', async function (next) {
    try {
        const hashedP = await bcrypt.hash(this.password, 10)
        this.password = hashedP
        next()
    } catch (err) {
        console.log('ERROR IN SAVE: ', err)
    }
})

module.exports = mongoose.model('login', loginSchema)

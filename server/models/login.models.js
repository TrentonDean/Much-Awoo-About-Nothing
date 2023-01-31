const mongoose = require('mongoose')

const loginSchema = mongoose.Schema({

    firstName: {
        type: String,
        required: [true, "First Name is required"]
    },

    lastName: {

        type: String,
        required: [true, "Last name is required"]
    },

    email: {
        type: String,
        required: [true, "Email is required!"]
    },

    password: {
        type: String,
        minLength: [7, "Password must be more then 7 characters"]
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

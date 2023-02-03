const loginModel = require('../models/login.models')

const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET_KEY

const register = async (req, res) => {
    try {
        const checkEmail = await loginModel.findOne({ email: req.body.email })
        if (checkEmail) {
            res.status(400).json({ errors: { email: {message: 'Email is already in use!'} } })
        } else {
            const data = new loginModel(req.body)
            const user = await data.save()
            const payload = { _id: user._id, email: user.email, firstName: user.firstName, lastName: user.lastName}
            const token = jwt.sign(payload, SECRET)
            res.cookie('userToken', token, {httpOnly:true, expires: new Date(Date.now() + 900000) })
            .json({ successMessage: 'userToken: ', user: user })
        }
    } catch (err) {
        res.status(400).json(err)
    }
}

const login = async (req, res) => {
    const user = await loginModel.findOne({ email: req.body.email })
    console.log('logging in:' + user)
    try {
        if (!user) {
            res.status(400).json({ errors: 'Your email is not found. Please try again' })
        } else {
            const validPassword = await bcrypt.compare(req.body.password, user.password)
            if (!validPassword) {
                res.status(400).json({ errors: 'Invalid email/password!' })
            } else {
                const payload = { _id: user._id, email: user.email, firstName: user.first, lastName:user.last }
                const token = jwt.sign(payload, SECRET)
                res.cookie('userToken', token, { expires: new Date(Date.now() + 900000) })
                .json({ successMessage: 'userToken: ', user: user })
            }
        }
    } catch (err) {
        res.status(400).json({ errors: 'Login error!!!' })
    }
}

const logout = (req, res) => {
    console.log("logging out");
    res.clearCookie('userToken');
    res.json({ successMessage: 'User logged out!' });
}

const getLoginUser = async (req, res) => {
    try {
        const user = jwt.verify(req.cookies.userToken, SECRET);
        const currentUser = await loginModel.findOne({ _id: user._id });
        res.json(currentUser);
    } catch (error) {
        res.status(400).json({ errors: 'failed to get logged in user.' })
    }
};

const updateUser = async (req, res) => {
    console.log('updateOne:', req.body)
    loginModel.findOneAndUpdate( {_id: req.body._id}, req.body, { new: true } )
        .then( e => {res.json(e)} )
        .catch( e => res.json(e) )
}



// export
module.exports = { register, login, logout, getLoginUser, updateUser }
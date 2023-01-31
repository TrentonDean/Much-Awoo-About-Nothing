const jwt = require("jsonwebtoken")
const secret = process.env.SECRET_KEY

module.exports.secret=secret;
module.exports.authenticate = (req, res, next) => {
    jwt.verify(req.cookies.userToken, secret,(err,email)=>{
        if(err){
            console.log("Authentication Error", err)
            res.status(401).json({verified:false})
        }else{
            console.log("Authenticated!")
            next()
        }
    })
}
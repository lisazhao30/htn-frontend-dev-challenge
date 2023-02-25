const userSchema = require('../models/users');
const jwt = require('jsonwebtoken');

const isAuthenticated = async (req,res,next)=>{
    try {
        const {token} = req.cookies;
        if(!token){
            return next('Please login to access the data');
        }
        const verify = await jwt.verify(token, process.env.SECRET_KEY);
        req.user = await userSchema.findById(verify.id);
        next();
    } catch (error) {
        res.status(401);
       return next(error); 
    }
}

module.exports = isAuthenticated;
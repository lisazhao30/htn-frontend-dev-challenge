const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = require("../models/users");
const isAuth = require("../middleware/auth");

const router = express.Router();

// @description Creating register route
// @access Public
router.post("/register", async (req,res) => {
    try {
        const { username, email, password } = req.body;
        //Check emptyness of the incoming data
        console.log(req.body);
        if (!username || !email || !password) {
            return res.json({ message: "Please enter all the details 222" });
        }

        //Check if the user already exists
        const userExist = await userSchema.findOne({ email: req.body.email });
        if (userExist) {
            return res.json({ message: "User already exist with the given emailId" });
        }
        //Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashPassword;
        const user = new userSchema(req.body);
        await user.save();
        const token = await jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
            expiresIn: process.env.JWT_EXPIRE,
        });
        return res.cookie({ 'token': token }).json({ success: true, message: 'User registered successfully', data: user })

    } 
    catch (error) {
        return res.json({ error: error.message });
    }
});

// @description reating login routes
// @access Public
router.post('/login', async (req,res) => {
    try {
        const { username, password } = req.body;
        //Check emptyness of the incoming data
        if (!username || !password) {
            return res.json({ message: "Please enter all the details" })
        }
        //Check if the user already exist or not
        const userExist = await userSchema.findOne({username: req.body.username});
        if(!userExist){
            return res.json({message: "Wrong credentials"})
        }
        //Check if the password matches
        const isPasswordMatched = await bcrypt.compare(password,userExist.password);
        if(!isPasswordMatched){
            return res.json({message: "Wrong credentials pass"});
        }
        const token = await jwt.sign({ id: userExist._id }, process.env.SECRET_KEY, {
            expiresIn: process.env.JWT_EXPIRE,
        });
        return res.cookie({"token":token}).json({success: true, message: "Logged In Successfully"});
    }

    catch (error) {
        return res.json({ error: error.message });
    }
});

//Creating user routes to fetch users data
router.get("/user", isAuth, async (req,res) => {
    try {
        const user  = await userSchema.find();
        if(!user){
            return res.json({message:"No user found"})
        }
        return res.json({user:user})
    }

    catch (error) {
        return res.json({ error: error.message });
    }
});

module.exports = router;

// const res = require('express/lib/response');
const asyncHandeler = require('express-async-handler');
const User = require('../Models/UserModel');

const generateToken = require('../config/generateToken');

const registerUser = asyncHandeler(async (req, res) => {
    
    const {name, email, password, pic} = req.body;

    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please Enter all the Field");
    }

    const userExist = await User.findOne({email})
    
    if (userExist) {
        res.status(400);
        throw new Error("User Already exist!");
    } 
    
    const user = await User.create({
        name, email, password, pic,
    });
    
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error("Faild to Create. Try again Later!")
    }
});

const asuthUser = asyncHandeler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    
    if (user) {
        res.json({
            _id: user._id, 
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id)
       }) 
    } else {
        res.status(401);
        throw new Error("Invalid Email or Password");
   }

})

module.exports = {registerUser}
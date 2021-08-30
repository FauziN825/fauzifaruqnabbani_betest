const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('config')
const Joi = require('joi');

const userDataSchema = new mongoose.Schema({
    userName : {
        type: String, 
        required: true,
        minlenght: 5,
        maxlength: 50
    },
    emailAddress:  {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    },
    accountNumber: {
        type: Number
    },
    identityNumber: {
        type: Number
    }
},  {timestamps: true})

userDataSchema.method.generateAuthToken = function () {
    const token = jwt.sign({_id: this._id}, config.get('jwtPrivateKey'));
    return token;
}

const UserData = mongoose.model('UserData', userDataSchema)

const validateUser = (user) => {
    const schema = {
        userName: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(50).required().email(),
        password: Joi.string().min(5).max(1024).required()
    }
    return Joi.validate(user, schema)
}


exports.UserData = UserData;
exports.validate = validateUser;
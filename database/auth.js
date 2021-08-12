const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userModel = require('../model/userModel')

const getCorrectPassword = function (password, confirmPassword) {
    return password === confirmPassword ? password : null;
}

const hashPassword = async (password) => {
    try {
        let hashedPassword = await bcrypt.hash(password, 8)
   } catch (error) {
       console.error(error);
   }
    return hashedPassword;
}

const emailExist = async (email) => {
     try {
         let found = await userModel.getUser(email)
    } catch (error) {
        console.error(error);
    }
    return found?true:false;
}

const isCorrectPassword = async (password, orignalPassword) => {
    try {
    let response = await bcrypt.compare(password,orignalPassword)
    }
    catch (error) {
        console.error(error);
    }
    return response;
}

const genUserToken = async (userid) => {
     const token = await jwt.sign(
        {userid}, 
        process.env.JWT_SECRET,
        {expiresIn:process.env.JWT_EXPIRES_IN}
        )
     return token
 }

 module.exports = { getCorrectPassword, hashPassword, emailExist, isCorrectPassword, genUserToken }
const express = require('express');
const User = require('../model/userModel');
const auth = require('../database/auth');

const signUp = async (req, res) => {
    const body = req.body;
    let user = { name, email, password, confirmPassword } = body;
        
    if (!await auth.emailExist(email)) {
        const correctPassword = auth.getCorrectPassword(password, confirmPassword)
    
        if (correctPassword) {
            password = await auth.hashPassword(correctPassword)
            user.password = password;
            const response = await User.addUser(user)
            res.status(202).json({
                status: 'success',
                message: 'User Account Created!',
            });

         } else {
            res.status(406).json({
            status: 'failed!',
            message: 'Incorrect Password!'
            });
    }
    } else {
        res.status(406).json({
            status: 'failed!',
            message: 'Email Already Exist!'
            })   
    }
}

const login= async (req, res) => {
    let { email, password } = req.body;
    const user = await User.getUser(email);
    if (!user) {
        res.status(404).json({
            status: ' Login failed!',
            message: `User with ${email} not found! Please signup!`
            })
    } else {
        if (await auth.isCorrectPassword(password, user.password)) {
            const token = await auth.genUserToken(user._id)
            res.status(200).json({
                id:user._id,
                name: user.name,
                email: user.email,
                token:token
            })
        } else {
            res.status(406).json({
            status: 'failed!',
            message: 'Incorrect Password!'
            })
        }
    }
}

const updateData = async (req, res) => {
    const id = req.params.id;
    let data = req.body;
    if (data.password !== undefined) {
        data.password = await auth.hashPassword(data.password)
        user = await User.updateUser(id,data)
    }
    else {
        user = await User.updateUser(id,data)
    }
    res.status(200).json({
        status: "success",
        message:'User Information Updated!'
    })
}

module.exports = { signUp, login, updateData}
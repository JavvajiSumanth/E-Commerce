const express = require('express');
const mongoose = require('mongoose');

const Login = mongoose.Schema({
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true,
        unique : true
    }
})

module.exports = mongoose.model('login',Login);
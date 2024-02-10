const express = require('express');
const mongoose = require('mongoose');

const FeedbackForm = new mongoose.Schema({
    feedbackName : {
        type : String,
        required: true
    },
    feedbackEmail: {
        type: String,
        required: true,
        unique: true
    },
    feedbackText: {
        type: String,
        required: true
    }
})

module.exports=mongoose.model('Feedback',FeedbackForm);
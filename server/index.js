const express = require('express');
const mongoose = require('mongoose');

const user = require('./models/user');
const feedbacks = require('./models/feedback');

const app = express();

const cors = require('cors');

app.use(cors());
app.use(express.json());

const URI = "mongodb+srv://sumanthjavvaji1299:sumanth123@advance-auto-parts.fnnea66.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(URI, {
    
}).then(() => {
    console.log("mongoDB connected")
    app.listen(4000,() => {
        console.log("server is running on port 4000");
    })
;}).catch((err) => {
    console.log("Error",error);
})

app.post('/user', (req,res) => {
    console.log("check")
    const {email,password} = req.body;
    const newUser = new user({
        email,
        password
    });

    console.log("app enters");
    
    newUser.save().then(() => {
        res.status(200).json({status:"OK"});
    }).catch((error) => {
         res.status(404).json("Error",error);
    })
})

app.post('/feedback', (req,res) => {
    const {name,email,text} = req.body;
    const newFeedback = new feedbacks({
        name,
        email,
        text
    })

    newFeedback.save().then(() => {
        res.status(200).json("OK");
    }).catch((error) => {
        res.status(404).json(error);
    })
})
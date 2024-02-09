const express = require('express');
const mongoose = require('mongoose');

const user = require('./models/user');

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
        res.json({status:"OK"});
    }).catch((error) => {
         res.json("Error",error)
    })
})
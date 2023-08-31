require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const bprouter = require('./routes/bprouter.js');

// creates express app
const app = express();

//middleware
// checks where data is attached to all requests and if data exists, it is attached to req.body object
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    return next();
});

// when user goes to /api/mlbNews, we invoke mlbRouter, in turn triggering every request inside mlbRouter.js
// in youtube Demo video mlbNews would have been named the same as mlbRouter
app.use('/api/battingpracticedata', bprouter)

// only start listening when mongoose DB returns promise object
// connect to MongoDB // asyn method that returns promise
mongoose.connect(process.env.MONG_URI)
  .then(() => {
        // listen for requests at port 3000 // Using environment variables will keep port private when pushed to github
        // referencing the PORT variable on the porcess.env object which was created with invocation of config method on 'dotenv' package
        app.listen(process.env.PORT, () => {
        console.log('connected to db & listening on port', process.env.PORT)
        });
    })
    .catch((error) => {
    console.log(error);
    });


//installed "npm install dotenv" -> a node module which loads environment variables to a process.env object
process.env
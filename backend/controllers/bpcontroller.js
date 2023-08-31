const battingPracticeModel = require('../models/battingpractice');
const mongoose = require('mongoose');

// get request controller
// get all team news
const getAllPractices = async (req, res) => {
    // find {} finds all news in battingPracticeModel. Could have passed in a property between {} to filter for a property
    // sorting by createdAt property (-1) for recent dates first
    const bpData = await battingPracticeModel.find({}).sort({createdAt: -1});
    res.status(200).json(bpData);
}   

// get one practice data 
const getSinglePractice = async (req, res) => {
    // referencing id from the bprouter GET request and destructring, then assigning it to the params property of the request object
    const {_id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)) {
        console.log("here")
        return res.status(404).json({error: 'no such practice occurred 1'})
    }
    const singlePractice = await battingPracticeModel.find({_id})
    if(!singlePractice) {
    return res.status(400).json({error: 'no such practice occurred 2'})
    }
    res.status(200).json(singlePractice);
}

// post request controller, // add a BP results // adds userInput from postman or front end to DB
const createPractice = async (req, res) => {
    const {player, bpType, date, maxEV, contactPercentage} = req.body;
// add doc to database    
    try {
        const trackBPs = await battingPracticeModel.create({player, bpType, date, maxEV, contactPercentage});
        res.status(200).json(trackBPs);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

// delete a batting practice 
const deletePractice = async (req, res) => {
    const {_id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).json({error: 'no such practice occurred 1'})
    }
    const singlePractice = await battingPracticeModel.findOneAndDelete({_id: _id})
    if(!singlePractice) {
        return res.status(400).json({error: 'no such practice occurred 2'})
    }
    res.status(200).json(singlePractice);
}

// update existing practice
const updatePractice = async (req, res) => {
    console.log('start of updatePractice')
    const {_id} = req.params; 
    console.log(_id)
    console.log(req.params)
   if(!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).json({error: 'no such practice occurred 1'})
    }
    console.log('well before update')
    const practice = await battingPracticeModel.findOneAndUpdate({_id: _id}, {
    // spread operator separates properties on given id and updates them
        ...req.body
    })
    if(!practice) {
        return res.status(400).json({error: 'no such practice occurred 2'})
    }
    console.log('before update')
    res.status(200).json(practice)
}





// export controllers you want to reference on router file
module.exports = {
    getSinglePractice,
    createPractice,
    getAllPractices,
    deletePractice,
    updatePractice
};
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const battingPractice = new Schema({
  player: {
    type: String,
    required: true  
  }, 
  bpType: {
    type:String,
    required: true,
  },
  date: {
    type:String,
    required: true
  },
  maxEV: {
    type: Number,
    required: true
  },
  contactPercentage: {
    type: Number,
    required:true
  }
}, { timestamps:true })

// may convert battingPractice to battingPractices
module.exports = mongoose.model('battingPractice', battingPractice);
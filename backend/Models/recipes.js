const mongoose = require('mongoose');

const Recipies = new mongoose.Schema({
 
  name: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: false,
    default: 'India'
  },
  ingredients: {
    type: [String],
    required: true
  },
  making_process: {
    type: [String],
    required: true
  },
  calories: {
    type: Number,
    required: false,
    default: 250
  },
  img: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    enum: ['breakfast', 'lunch', 'dinner', 'snack'],
    required: false,
    default: 'breakfast'
  },
  UserId:{
    type: String,
    required:true
  }
});

module.exports =mongoose.model('Recipies',Recipies);

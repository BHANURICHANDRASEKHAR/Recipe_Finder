const mongoose = require('mongoose');

const Recipies = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
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
    required: true
  },
  img: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['breakfast', 'lunch', 'dinner', 'snack'],
    required: true
  }
});

module.exports =mongoose.model('Recipies',Recipies);

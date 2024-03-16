const mongoose = require('mongoose');

const SavedRecipies = new mongoose.Schema({
  post_id: {
    type: String,
    required: true
  },
  Itemname: {
    type: String,
    required: true
  },

  img: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['breakfast', 'lunch', 'dinner', 'snack','biryani'],
    required: true
  },  
  UserId:{type:String}
});

module.exports =mongoose.model('savedrecipes',SavedRecipies);

const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username:{
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  favorite_anime: {
    type: String,
  },
  favorite_character: {
    type: String,
  }

});

const ModelAccount = mongoose.model("User", schema)
module.exports = ModelAccount
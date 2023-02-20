const mongoose = require('mongoose');
const validator = require('validator');
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please Enter Your Name'],
    maxLength: [30, 'Name can not exceed 30 characters'],
    minLength: [4, 'Name should have more than 4 characters'],
  },
  email: {
    type: String,
    required: [true, 'Please Enter Your Email'],
    unique: true,
    validate: [validate.isEmail, 'Please enter valid email'],
  },
  password: {
    type: String,
    required: [true, 'Please Enter Your Email'],
    minLength: [8, 'Password should be 8 characters'],
    Select: false,
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  role: {
    type: String,
    default: 'user',
  },
  resetPasswordToken,
  resetPasswordExpire: Date,
});
module.exports = mongoose.model('User', userSchema);

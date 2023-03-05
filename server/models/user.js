const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
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
  phone: {
    type: Number,
  },
  userType: {
    type: String,
    required: true,
  },

  // extra properties for userType 'lawyer'
  licenseNumber: {
    type: String,
  },
  serviceCategory: {
    type: String,
  },
  consultationFee: {
    type: Number,
  },
  almaMater: {
    type: String,
  },
  bio: {
    type: String,
  },
  profilePicUrl: {
    type: String,
    default:
      'https://res.cloudinary.com/djxuxbxet/image/upload/v1677984596/Legalink-Lawyer/no_profile_pic.jpg',
  },
});

const User = model('User', userSchema);

module.exports = { userSchema, User };

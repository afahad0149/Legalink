const { model, Schema } = require('mongoose');

const lawyerSchema = new Schema({
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
    required: true,
  },

  licenseNumber: {
    type: String,
    required: true,
  },
  serviceCategory: {
    type: String,
    required: true,
  },
  consultationFee: {
    type: Number,
    required: true,
  },
  almaMater: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  profilePicUrl: {
    type: String,
    default:
      'https://res.cloudinary.com/djxuxbxet/image/upload/v1677984596/Legalink-Lawyer/no_profile_pic.jpg',
  },
  isRegistered: {
    type: Boolean,
    default: true, // set as false when implementing the admin approve
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
});

const Lawyer = model('Lawyer', lawyerSchema);

module.exports = { lawyerSchema, Lawyer };

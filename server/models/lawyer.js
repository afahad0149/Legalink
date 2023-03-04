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
    default: '',
  },
  isRegistered: {
    type: Boolean,
    default: false,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  }
});

const Lawyer = model('Lawyer', lawyerSchema);

module.exports = { lawyerSchema, Lawyer };

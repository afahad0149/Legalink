const { User } = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const secret = process.env.JWT_SECRET;

const register = async (req, res) => {
  console.log(req.body);
  try {
    const { firstName, lastName, email, password, userType } = req.body;
    const checkUser = await User.find({ email });
    if (checkUser.length) {
      res.status(401).send('An account with this email already exists.');
    } else {
      try {
        if (password === '') throw new Error();
        const salt = bcrypt.genSaltSync();
        const encryptedPass = bcrypt.hashSync(password, salt);
        const newUser = await User.create({
          firstName,
          lastName,
          email,
          password: encryptedPass,
          userType,
        });

        const projection = { _id: 1, email: 1, firstName: 1, lastName: 1 };
        const user = await User.findById(newUser._id, projection);
        const token = jwt.sign({ _id: user._id }, secret);
        res.setHeader('Authorization', 'Bearer ' + token); // exposed header
        res.status(201).send(user);
      } catch (error) {
        res.status(400).send('Could not create user');
      }
    }
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const checkUser = await User.find({ email });
    if (!checkUser.length) {
      res.status(401).send('There is no account with this email.');
    } else {
      const user = checkUser[0];
      if (bcrypt.compareSync(password, user.password)) {
        const projection = { _id: 1, email: 1, firstName: 1, lastName: 1 };
        const userToSend = await User.findById(user._id, projection);
        const token = jwt.sign({ _id: user._id }, secret);
        res.setHeader('Authorization', 'Bearer ' + token);
        res.status(201).send(userToSend);
      } else {
        res.status(401).send('Invalid password.');
      }
    }
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
};

module.exports = { register, login };

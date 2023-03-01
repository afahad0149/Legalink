const { User } = require('../models/user');
const getAdmin = async (req, res, next) => {
  // console.log(req.user._id);
  try {
    const { email } = req.user;
    console.log(email);
    const admin = await User.findOne({ email: email });
    console.log(admin);
    res.status(201).send(admin);
  } catch (err) {
    res.status(401).send('Admin not found');
  }
};

module.exports = getAdmin;

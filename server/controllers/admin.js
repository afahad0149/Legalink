const { User } = require('../models/user');
const getAdmin = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const projection = { firstName: 1, lastName: 1, email: 1, userType: 1 };
    const admin = await User.find({ _id }, projection);
    res.status(201).send(admin);
  } catch (err) {
    res.status(401).send('Admin not found');
  }
};

module.exports = getAdmin;

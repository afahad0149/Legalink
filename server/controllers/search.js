const { User } = require('../models/user');
const getLawyers = async (req, res, next) => {
  try {
    const userType = "lawyer";
    const projection = { firstName: 1, lastName: 1, email: 1, phone: 1, serviceCategory: 1, consultationFee: 1, almaMater: 1, bio: 1 };
    const lawyers = await User.find({ userType }, projection);
    res.status(201).send(lawyers);
  } catch (err) {
    res.status(401).send({err});
  }
};

module.exports = getLawyers;
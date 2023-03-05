const { Lawyer } = require('../models/lawyer');
const getLawyers = async (req, res, next) => {
  try {
    const userType = 'lawyer';
    const projection = {
      firstName: 1,
      lastName: 1,
      email: 1,
      phone: 1,
      serviceCategory: 1,
      consultationFee: 1,
      almaMater: 1,
      bio: 1,
      profilePicUrl: 1,
      isAvailable: 1,
      isRegistered: 1,
    };
    const lawyers = await Lawyer.find({}, projection);

    res.status(200).send(lawyers);
  } catch (err) {
    res.status(401).send({ err });
  }
};

const getSingleLawyer = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Lawyer.findById(id)
    console.log(data);
    res.status(200).send(data)
    
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports ={ getLawyers, getSingleLawyer};

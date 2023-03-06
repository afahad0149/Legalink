const { Lawyer } = require('../models/lawyer');
const { Ticket } = require('../models/ticket');
const getLawyers = async (req, res, next) => {
  try {
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
    res.status(400).send({ err });
  }
};

const getSingleLawyer = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Lawyer.findById(id);
    // console.log(data);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

const postTicket = async (req, res) => {
  try {
    const { clientId, lawyerId } = req.body;
    const existingTicket = await Ticket.find({
      clientId,
      lawyerId,
      state: 'pending',
    });
    if (existingTicket.length) {
      res.status(401).send('You already have a pending request');
    } else {
      // console.log(req.body);
      const ticket = await Ticket.create(req.body);
      res.status(201).send(ticket);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

module.exports = { getLawyers, getSingleLawyer, postTicket };

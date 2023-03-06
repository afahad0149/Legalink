const { Ticket } = require('../models/ticket');
const getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find({});
    res.status(200).send(tickets);
  } catch (err) {
    res.status(400).send({ err });
  }
};

module.exports = { getTickets };

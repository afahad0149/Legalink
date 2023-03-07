const { Ticket } = require('../models/ticket');
const getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find({});
    res.status(200).send(tickets);
  } catch (err) {
    res.status(400).send({ err });
  }
};

const activateTicket = async (req, res) => {
  // console.log('Hello from activateTicket');
  try {
    const id = req.params.id;
    // console.log(id);
    const ticket = await Ticket.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).send(ticket);
  } catch (error) {
    console.log(error);
    res.status(400), send({ error });
  }
};

const deleteTicket = async (req, res) => {
  try {
    const id = req.params.id;
    const ticket = await Ticket.findByIdAndDelete(id);
    res.status(200).send(ticket);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error });
  }
};

module.exports = { getTickets, activateTicket, deleteTicket };

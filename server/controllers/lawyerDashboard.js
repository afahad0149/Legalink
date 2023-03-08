const { getMailOptions } = require('../mailing/mailOptions');
const { transport } = require('../mailing/nodeMailer');
const { Ticket } = require('../models/ticket');
const { Lawyer } = require('../models/lawyer');
const getTickets = async (req, res) => {
  try {
    const lawyerId = req.params.id;
    const tickets = await Ticket.find({ lawyerId });
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

    const lawyer = await Lawyer.findById(req.body.lawyerId);

    transport(
      getMailOptions(
        ticket.clientEmail,
        'Request for service accepted',
        `Hello ${ticket.clientName},
          Your request for service for ${lawyer.firstName} ${lawyer.lastName} has been granted. You will be contacted by them soon.`
      )
    );

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
    const lawyer = await Lawyer.findById(req.body.lawyerId);

    transport(
      getMailOptions(
        ticket.clientEmail,
        'Request for service rejected',
        `Hello ${ticket.clientName},
          Sorry to inform that your request for service for ${lawyer.firstName} ${lawyer.lastName} has been rejected. You can contact them at ${lawyer.email}.`
      )
    );
    res.status(200).send(ticket);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error });
  }
};

module.exports = { getTickets, activateTicket, deleteTicket };

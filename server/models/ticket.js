const { model, Schema } = require('mongoose');

const ticketSchema = new Schema({
  clientId: {
    type: String,
    required: true,
  },
  clientName: {
    type: String,
    required: true,
  },
  clientEmail: {
    type: String,
    required: true,
  },
  lawyerId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    default: 'pending',
  },
  createdAt: {
    type: Number,
    default: Date.now,
  },
});

const Ticket = model('Ticket', ticketSchema);

module.exports = { ticketSchema, Ticket };

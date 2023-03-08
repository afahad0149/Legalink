function getMailOptions(receiverEmail, subject, body) {
  return {
    from: 'hello.legalink@gmail.com',
    to: [receiverEmail],
    subject: subject,
    html: body,
  };
}

module.exports = { getMailOptions };

const router = require('express').Router();
const MessagingResponse = require('twilio').twiml.MessagingResponse;

router.post('/', (req, res) => {
  const twiml = new MessagingResponse();

  twiml.message('I got your message through a twilio webhook (& ngrok)');

  res.writeHead(200, { 'Content-Type': 'text/xml' });
  res.end(twiml.toString());
});

module.exports = router;

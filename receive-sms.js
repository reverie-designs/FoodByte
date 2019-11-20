const dh = require('./helpers/dataHelpers.js');
const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').TwimlResponse.MessagingREsponse;
// const router  = express.Router();

const app = express();
module.exports = (order_id, timeStamp) => { // order.status
  app.post('/sms', (req, res) => {
    const twiml = new MessagingResponse();
    twiml.message('Test');

    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
  });

  http.createServer(app).listen(1337, () => {
    console.log('server On');
  });

};

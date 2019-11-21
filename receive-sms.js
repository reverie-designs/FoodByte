// const dh = require('./helpers/dataHelpers.js');
// const http = require('http');
// const express = require('express');
// const MessagingResponse = require('twilio').TwimlResponse.MessagingREsponse;
// // const router  = express.Router();
// // server forwarding address - https://5a427d4f.ngrok.io/sms    here sms is the route to post to.
// const app = express();
// module.exports = (order_id, timeStamp) => { // order.status
//   app.post('/sms', (req, res) => {
//     const twiml = new MessagingResponse();
//     twiml.message('Test');

//     res.writeHead(200, {'Content-Type': 'text/xml'});
//     res.end(twiml.toString());
//   });

//   http.createServer(app).listen(80, () => {
//     console.log('server On');
//   });

// };

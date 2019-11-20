const dh = require('./helpers/dataHelpers.js');
const accountSid = 'AC2d799e3b41b15182aa89ad2eca682d28'
const authToken = '28705347311b7d8df12c161f50790ca7'

const client = require('twilio')(accountSid, authToken);

module.exports = (db) =>({
  sendSMS: function() {
  dh(db).addOrder(1)
  .then(orders => {
    console.log(orders);
  });
  client.messages.create({
  to:   '+16477004837', // from user
  from: '+16479300219',
  body: 'Your order will be ready in 15 mins' // needs to have order.id + order.status
})
.then((message) => console.log(message.sid));

client.messages.create({
  to:   '+14372219197',
  from: '+16479300219',
  body: `NEW ORDER ${console.log(.then(orders => {
    console.log(orders);)}`
})
.then((message) => console.log(message.sid));
  }
});

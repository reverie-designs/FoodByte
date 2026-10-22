const dh = require('./helpers/dataHelpers.js');
const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN

const client = require('twilio')(accountSid, authToken);

module.exports = (db) =>({
  sendSMS: function() {
  dh(db).addOrder(1)
  .then(orders => {
    console.log(orders);
  });
  client.messages.create({
  to:   process.env.CUSTOMER_PHONE, // from user
  from: process.env.TWILIO_FROM_NUMBER,
  body: 'Your order will be ready in 15 mins' // needs to have order.id + order.status
})
.then((message) => console.log(message.sid));

client.messages.create({
  to:   process.env.RESTAURANT_PHONE,
  from: process.env.TWILIO_FROM_NUMBER,
  body: `NEW ORDER ${console.log(.then(orders => {
    console.log(orders);)}`
})
.then((message) => console.log(message.sid));
  }
});

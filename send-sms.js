const accountSid = 'AC2d799e3b41b15182aa89ad2eca682d28'
const authToken = '28705347311b7d8df12c161f50790ca7'

const client = require('twilio')(accountSid, authToken);

client.messages.create({
  to:   '+16477004837',
  from: '+16479300219',
  body: 'Your order will be ready in 15 mins'
})
.then((message) => console.log(message.sid));

client.messages.create({
  to:   '+14372219197',
  from: '+16479300219',
  body: 'NEW ORDER: '
})
.then((message) => console.log(message.sid));


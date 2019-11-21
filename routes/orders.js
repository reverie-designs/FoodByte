const express = require('express');
const router  = express.Router();
const dh = require('../helpers/dataHelpers');

const accountSid = 'AC2d799e3b41b15182aa89ad2eca682d28'
const authToken = '28705347311b7d8df12c161f50790ca7'

const client = require('twilio')(accountSid, authToken);

module.exports = (db) => {
  // send sms to owner, details - order item, qty
  router.post("/:id", (req, res) => {
    // send sms to user , details - order confiramtion after the owner confirms
    //https://119e4733.ngrok.io - online server https://1a1190a3.ngrok.io  herms number +16477004837'
    if (!req.session.user_id) {
      res.redirect('/login');
    } else {
      console.log('================THIS IS ORDER', req.body);
      console.log('THIS IS order-id', req.params.id);
      let id = req.params.id;
      dh(db).addOrder(req.body, req.params.id)
        .then(order => {
          client.messages.create({
            to:   '+16479686754', // restaurants side
            from: '+16479300219',
            body: `Go to this link - 1a1190a3.ngrok.io/confirm/${id}`
          });
          // client.messages.create({
          //   to:   '+16479686754', // restaurants side
          //   from: '+16479300219',
          //   body: `your order has been placed. you are ${id} in line`
          // });
          res.redirect(req.headers.referer, {order});
        });
    }
    // console.log(req); // order dtails to be sent owner
    // console.log(req.body); // order dtails to be sent owner
    // function required to link the users number to the order for sms confirmation/ sending
    // req.session.user_id = req.params.id;
    // let restaurant_id = req.headers.referer.replace("http://localhost:8080/restaurants/", "");
    // res.redirect('/restaurants');// redirects to restraunts/:id page
  });
  return router;
};

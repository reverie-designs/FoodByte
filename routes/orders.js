const express = require('express');
const router  = express.Router();
const dh = require('../helpers/dataHelpers');

// TWILLIO input your user account info here //
// const accountSid = '';
// const authToken = '';
// const client = require('twilio')(accountSid, authToken);

module.exports = (db) => {
  // send sms to owner, details - order item, qty
  router.post("/:id", (req, res) => {
    if (!req.session.user_id) {
      res.redirect('/login');
    } else {
      let id = req.params.id;
      dh(db).addOrder(req.body, req.params.id)
        .then(order => {
          client.messages.create({ // sends link to restaurants side
            to:   '', // client number here
            from: '+16479300219', //twillio generated number here
            body: `Please click this link to set the duration of this order ${id} - https://393f32fd.ngrok.io/confirm/${id}` //ngrok generated url with order id
          })
            .then(dh(db).setOrderStatus(id)
              .then(currentTime => {
                let templateVar = { id: id };
                res.redirect("/restaurants");
                res.send(`restaurant awaiting confirmation for order ${id}`);
              }));
        })
        .catch(e => {
          res.redirect('/restaurants');
          // res.send(e);
        });
    }
  });
  return router;
};

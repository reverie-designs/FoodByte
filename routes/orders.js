const express = require('express');
const router  = express.Router();
const dh = require('../helpers/dataHelpers');

// const accountSid = 'AC2d799e3b41b15182aa89ad2eca682d28';
// const authToken = '28705347311b7d8df12c161f50790ca7';
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
            to:   '+16479686754',
            from: '+16479300219',
            body: `Please click this link to set the duration of this order ${id} - 1a1190a3.ngrok.io/confirm/${id}`
          })
            .then(dh(db).setOrderStatus(id)
              .then(currentTime => {
                let templateVar = { id: id };
                console.log(templateVar);
                console.log('---------------curent time reached', currentTime);
                res.redirect("/restaurants");
                res.send(`restaurant awaiting confirmation for order ${id}`);
              }));
        })
        .catch(e => {
          console.log(e);
          res.send(e);
        });
    }
  });
  return router;
};

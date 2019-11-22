const express = require('express');
const router  = express.Router();
const dh = require('../helpers/dataHelpers');

// TWILLIO input your user account info here //
// const accountSid = '';
// const authToken = '';
// const client = require('twilio')(accountSid, authToken);

module.exports = (db) => {
  router.get("/:id", (req, res) => {
    let id = req.params.id;
    console.log(req.params.id);
    res.render("owner", {id});
  });

  router.post("/:id", (req, res) => {
    let time = req.body.time;
    const order_id = req.params.id;

    // client side messaging the order duration
    client.messages.create({
      to:   '', ///client phone
      from: '+16479300219', //twillio generate number $1
      body: `your order will be ready in ${time} minutes`
    })
      .then(() => dh(db).setOrderTime(time, order_id))
      .catch(err => console.error("Error updating time", err));
    res.send('<h1>duration has been set</h1>');
  });

  return router;
};

const express = require('express');
const router  = express.Router();
const dh = require('../helpers/dataHelpers');

const accountSid = 'AC2d799e3b41b15182aa89ad2eca682d28';
const authToken = '28705347311b7d8df12c161f50790ca7';
const client = require('twilio')(accountSid, authToken);

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
      to:   '+16477004837',
      from: '+16479300219',
      body: `your order will be ready in ${time} minutes`
    })
      .then(() => dh(db).setOrderTime(time, order_id))
      .catch(err => console.error("Error updating time", err));
    res.send('<h1>duration has been set</h1>');
  });

  return router;
};

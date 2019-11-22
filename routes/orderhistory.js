const express = require('express');
const router  = express.Router();
const dh = require('../helpers/dataHelpers');

module.exports = (db) => {
  // send sms to owner, details - order item, qty
  router.get("/", (req, res) => {
    if (!req.session.user_id) {
      res.redirect('/login');
    } else {
      let user_id = req.session.user_id;
      dh(db).getOrderHistoryFromId(user_id)
      .then(order_history => {
        let name = req.session.user_name;
         res.render("orderhistory", {order_history, username: name});
      })
        .catch(e => {
          console.log(e);
          res.send(e);
        });
    }
  });
  return router;
};

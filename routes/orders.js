const express = require('express');
const router  = express.Router();
const dh = require('../helpers/dataHelpers');

module.exports = (db) => {
  // send sms to owner, details - order item, qty
  router.post("/:id", (req, res) => {
    // send sms to user , details - order confiramtion after the owner confirms

    if (!req.session.user_id) {
      res.redirect('/login');
    } else {
      console.log('================THIS IS ORDER', req.body);
      console.log('THIS IS order-id', req.params.id);
      dh(db).addOrder(req.body, req.params.id)
        .then(order => {
          res.redirect(req.headers.referer, {order});
        })
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

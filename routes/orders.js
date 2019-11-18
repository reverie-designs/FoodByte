const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  // send sms to owner, details - order item, qty
  router.post("/", (req, res) => {
    // send sms to user , details - order confiramtion after the owner confirms
    console.log(req.body);
    // req.session.user_id = req.params.id;
    res.redirect("/restaurants");
  });

  // router.post("/orders", (req, res) => {
  //   db.query(`SELECT * FROM users;`)
  //     .then(data => {
  //       const users = data.rows;
  //       res.render('users_index', { users });
  //     })
  //     .catch(err => {
  //       res
  //         .status(500)
  //         .json({ error: err.message });
  //     });
  // });
  return router;
};

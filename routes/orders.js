const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  const rest = {
    owner_id: 2,
    title: "the greatest restaurant",
    cuisine_type: "human edible",
    hours_of_operation: "forever",
    cover_photo_url: 'https://images.unsplash.com/photo-1573920111312-04f1b25c6b85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    slide_1_url: 'https://images.unsplash.com/photo-1573853403795-8755533bcd87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    slide_2_url: 'https://images.unsplash.com/photo-1573853403795-8755533bcd87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    slide_3_url: 'https://images.unsplash.com/photo-1573853403795-8755533bcd87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    street: '23 baker street',
    city: 'toronto',
    province: 'Ontario',
    post_code: 'LW4 5t6',
    country: 'canada',
    active: 'true'
  };
  // populates the restaurant
  router.post("/orders", (req, res) => {
    // send sms to owner, details - order item, qty
    // send sms to user , details - order confiramtion after the owner confirms
    res.redirect('orders');
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

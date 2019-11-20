const express = require('express');
const router  = express.Router();
const dh = require('../helpers/dataHelpers');
// const user = {
//   "aJ48lW": {
//     name: "a",
//     email: "a@a.a",
//     phone: 1234567890,
//     password: "dish"
//   }
// };
// const getAllRestaurants

module.exports = (db) => {
  // populates the restaurants home page restaurants
  // get request for the page
  router.get("/", (req, res) => {
    dh(db).getAllRestaurants()
      .then(restaurants => {
        if (req.session.user_name) {
          // console.log(req.session.user_name);
          let name = req.session.user_name;
          res.render("index", {restaurants, username: name});
        } else {
          res.render("index", {restaurants, username: null});
        }
      })
      .catch(e => {
        console.log(e);
        res.send(e);
      });
  });

 // renders the specfic restaurants page
 router.get("/:id", (req, res) => {
  if (!req.session.user_id) {
    res.redirect('/login');
  } else {

    let id = req.params.id; //restaurant id
    // console.log(id, 'THIS IS REST ID');
    dh(db).getAllRestaurantMenuItems(id)
    .then(menu_items => {
      // console.log(menu_items)
      let name = req.session.user_name;
      let userId = req.session.user_id;
      dh(db).createOrder(userId, id)
      .then(newOrder =>{
      // console.log(newOrder);
      res.render("orders", {menu_items, username: name, newOrder})
      })})
    .catch(e => {
      console.log(e);
      res.send(e);
    })
  }
  });



  return router;
};

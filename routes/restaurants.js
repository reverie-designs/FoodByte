const express = require('express');
const router  = express.Router();
const dh = require('../helpers/dataHelpers');


module.exports = (db) => {
  // populates the restaurants home page
  // get request for the page
  router.get("/", (req, res) => {

    dh(db).getAllRestaurants()
      .then(restaurants => {
        if (req.session.user_name) {
          let userId = req.session.user_id;
          dh(db).getOrderTime(userId)
            .then(time => {
              let name = req.session.user_name;
              res.render("index", {restaurants, username: name, duration: time});
            });
        } else {
          res.render("index", {restaurants, username: null, duration: null});
        }
      })
      .catch(() => {
        res.redirect('/restaurants');
      });
  });

  // renders the specfic restaurants page
  router.get("/:id", (req, res) => {
    if (!req.session.user_id) {
      res.redirect('/login');
    } else {
      let id = req.params.id; //restaurant id
      dh(db).getAllRestaurantMenuItems(id)
        .then(menu_items => {
          let name = req.session.user_name;
          let userId = req.session.user_id;
          dh(db).createOrder(userId, id)
            .then(newOrder =>{
              res.render("orders", {menu_items, username: name, newOrder});
            })
            .catch(e => {
              res.redirect('/restaurants');
            });
        })
        .catch(e => {
          res.redirect('/restaurants');
          // res.send(e);
        });
    }
  });

  return router;
};

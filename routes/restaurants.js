const express = require('express');
const router  = express.Router();
const dh = require('../helpers/dataHelpers');
const user = {
  "aJ48lW": {
    name: "a",
    email: "a@a.a",
    phone: 1234567890,
    password: "dish"
  }
};
// const getAllRestaurants

module.exports = (db) => {
  // populates the restaurants home page restaurants
  // get request for the page
  router.get("/", (req, res) => {
    dh(db).getAllRestaurants()
      .then(restaurants => {
        if (req.session.user_name) {
          console.log(req.session.user_name);
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
  // if (!req.session.user_id) {
  //   res.redirect('/login');
  // } else {
    let id = req.params.id;
    // console.log(id, 'THIS IS REST ID');
    dh(db).getAllRestaurantMenuItems(id)
      .then(menu_items => {
        console.log(menu_items);

      res.render("orders", {menu_items})
    })
    .catch(e => {
      console.log(e);
      res.send(e);
    })
  });





  // router.post("/:id", (req, res) => {
  //   if (!req.session.user_id) { //using cookie parser??????????
  //     res.redirect('/login');
  //   }
  //   res.render('orders', rest);
  // });


  // module.exports = (db) => {
  //   // get request for the resturants homepage
  //   router.get("/", (req, res) => {
  //     console.log('reached');
  //     data.getAllRestaurants
  //       .then(data => {
  //         const restaurants = data.rows;
  //         const rest = res.json({ restaurants });
  //         res.render("index", rest);
  //       })
  //       .catch(err => {
  //         res
  //           .status(500)
  //           .json({ error: err.message });
  //       });
  //   });

  //   // router.post("/", (req, res) => {
  //   //   db.query(`SELECT * FROM restaurants;`)
  //   //     .then(data => {
  //   //       const restaurants = data.rows;
  //   //       const rest = res.json({ restaurants });
  //   //       res.render("rest", rest);
  //   //     })
  //   //     .catch(err => {
  //   //       res
  //   //         .status(500)
  //   //         .json({ error: err.message });
  //   //     });
  //   // });

  //   // router.get("/:id", (req, res) => {
  //   //   alert('reached');
  //   //   // if (!req.session.user_id) {
  //   //   //   res.redirect("/login");
  //   //   // } else { // data helpers
  //   //     db.query(`SELECT * FROM restaurants WHERE restaurants.id = $1;`, [req.body.restaurant_id]) // need to dbl chk the value passed into the query the restarraunt id
  //   //       .then(data => {
  //   //         const restaurantId = data.rows;
  //   //         const id = res.json({ restaurantId });
  //   //         res.render("rest_show", id);
  //   //       })
  //   //       .catch(err => {
  //   //         res
  //   //           .status(500)
  //   //           .json({ error: err.message });
  //   //       });
  //   //   // }
  //   // });

  return router;
};

const express = require('express');
const router  = express.Router();
// const data = require('../helpers/dataHelpers');

module.exports = (db) => {
  const rests = {
    restaurant1: {
      title: "the greatest restaurant",
      cuisine_type: "human edible",
      cover_photo_url: 'https://images.unsplash.com/photo-1573920111312-04f1b25c6b85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    restaurant2: {
      title: "2nd best",
      cuisine_type: "ediblish",
      cover_photo_url: 'https://images.unsplash.com/photo-1573920111312-04f1b25c6b85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    }
  };
  // populates the restaurants home page
  router.get("/", (req, res) => {
    res.render('index', rests);
  });
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
  router.get("/:id", (req, res) => {
    if (!req.session.user_id) { //using cookie passer??????????
      res.redirect('/login');
    }
    res.render('orders', rest);
  });
  router.post("/:id", (req, res) => {
    if (!req.session.user_id) { //using cookie passer??????????
      res.redirect('/login');
    }
    res.render('orders', rest);
  });
};

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

//   return router;
// };

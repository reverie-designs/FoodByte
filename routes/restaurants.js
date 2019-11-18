const express = require('express');
const router  = express.Router();
const {getAllRestaurants} = require('../helpers/dataHelpers');
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
  // populates the restaurants home page with template variable for now
  // get request for the page
  router.get("/", (req, res) => {
    // db.
    // let templateVars = {
    //   user_id: 'dude',
    //   restaurant1: {
    //     title: "The greatest restaurant",
    //     cuisine_type: "human edible",
    //     hours_of_operation: "forever",
    //     cover_photo_url: 'https://images.unsplash.com/photo-1573920111312-04f1b25c6b85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //   },
    //   restaurant2: {
    //     title: "2nd best",
    //     cuisine_type: "edible-ish",
    //     hours_of_operation: "whenever",
    //     cover_photo_url: 'https://images.unsplash.com/photo-1573920111312-04f1b25c6b85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //   }
    // };
    // if (!req.session.user_id) {
    //   console.log('---------------------hey', templateVars.user_id);
    //   res.render('index', templateVars);
    // } else { //using cookie parser??????????
      const templateVars = getAllRestaurants();
      // templateVars.user_id = req.session.user_id;
      // console.log('---------------------hey', templateVars.user_id);
      res.render('index', templateVars);
    // }
  });
  // renders the specfic restaurants page
  router.get("/:id", (req, res) => {
    console.log('---------------------hey');
    // if (!req.session.user_id) { //using cookie parser??????????
    //   res.redirect('/login');
    // } else {
      const templateVars = {
        user_id: 'dude',
        item_1: {
          title: "Fries w/ side - burger",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum mattis ullamcorper velit sed. Aliquet porttitor lacus luctus accumsan. Massa tempor nec feugiat nisl pretium fusce id."
        },
        item_2: {
          title: "BACON w/ side - bacon",
          description: "Mo Bacon Mo betta, consectetur adipiscing elit, no such thing as turkey bacon incididunt ut labore et dolore magna aliqua. Vestibulum mattis ullamcorper velit sed. Aliquet porttitor lacus luctus accumsan. Massa tempor nec feugiat nisl pretium fusce id."
        }
      };
      res.render('orders', templateVars);
    // }
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

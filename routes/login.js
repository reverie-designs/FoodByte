const express = require('express');
const router  = express.Router();
// const getUserWithEmail = require('../helpers/dataHelpers');


// router.post("/", (req, res) => {
//   // if (req.body.email === "", req.body.password === "") {
//   //   res.redirect("/login");
//   // }
//   // if (!getUserWithEmail(req.body.email)) {
//   //   res.status(403).send('<h1>Email does not exist- Please type in a valid email and password</h1><h1><a href="/register">Click me to get back</a></h1>');
//   // } else if (!bcrypt.compareSync(password, user.password)) {
//   //   res.status(403).send('<h1>Incorrect password</h1><h1><a href="/register">Click me to get back</a></h1>');
//   const user = getUserWithEmail(req.body.email);
//   req.session.user_id = req.params.id;
//   res.redirect("/restaurants");
// });

module.exports = (db) => {
  router.post("/", (req, res) => {
    console.log(req.body);
    req.session.user_id = req.params.id;
    res.redirect("/restaurants");
  });
  router.get("/", (req, res) => {
    // if (!req.session.user_id) { //checks if a user is logged in already
    //   req.session.user_id = req.params.id;
    //   res.redirect("/restraunts");
    // } else {
      let templateVars = {
        user_id: req.params.id,
        order_history: 'ORDER HISTORY',
        slide_1: 'https://picsum.photos/id/679/200/200',
        slide_2: 'https://picsum.photos/id/679/200/200',
        slide_3: 'https://picsum.photos/id/679/200/200'
      };
      res.render("login", templateVars);
    // }
  });

  router.get("/:id", (req, res) => {
    req.session.user_id = req.params.id;
    req.redirect('/restaurants');
  });

  return router;
};


// if (!req.session.user_id) {
//   req.session.user_id = req.params.id;
//   console.log('not logged in');
// } else {
//   db.query(`SELECT * FROM restaurants;`, [req.session.user_id]) // need to dbl chk the value passed into the query the restarraunt id
//     .then(data => {
//       const restaurants = data.rows;
//       const id = res.json({ restaurants });
//       res.render("rest", id);
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .json({ error: err.message });
//     });
// }
// res.redirect("/restaurants");
// )};

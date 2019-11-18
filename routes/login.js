const express = require('express');
const router  = express.Router();
const dh = require('../helpers/dataHelpers');


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

// exports.getUserWithEmail = getUserWithEmail;

module.exports = (db) => {
  const login = (email, password) => {
    return db.getUserWithEmail(email)
      .then(user => {
        if (password === user.password) {
          return user;
        }
        return null;
      });
  };

  router.post("/", (req, res) => {
    const {name, phone, email, password} = req.body;
    login(email, password)
      .then(user => {
        if (!user) {
          res.send({error: "error"});
          return;
        }
        req.session.user_id = user.id;
        req.session.user_name = user.name;
        res.send({user: {name: user.name, email: user.email, phone: user.phone, id: user.id}});
        res.redirect("/restaurants");
      })
      .catch(e=> res.send(e));
  });

  router.get("/", (req, res) => {
    const user = dh(db).getUserWithEmail();
    if (user) {
      req.session.user_id = user.id;
    }
    res.redirect("/restaurants");
    // if (!req.session.user_id) { //checks if a user is logged in already
    //   req.session.user_id = req.params.id;
    //   res.redirect("/restraunts");
    // } else {
    //   let templateVars = {
    //     user_id: req.params.id,
    //     order_history: 'ORDER HISTORY',
    //     slide_1: 'https://picsum.photos/id/679/200/200',
    //     slide_2: 'https://picsum.photos/id/679/200/200',
    //     slide_3: 'https://picsum.photos/id/679/200/200'
    //   };
    //   res.render("login", templateVars);
    // }
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

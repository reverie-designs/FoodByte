const express = require('express');
const router  = express.Router();
// const getUserWithEmail = require('../helpers/dataHelpers');


// router.post("/login", (req, res) => {
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
  router.get("/", (req, res) => {
    let templateVars = {
      user_id: 'jojo',
      order_history: 'ORDER HISTORY',
      slide_1: 'https://picsum.photos/id/679/200/200',
      slide_2: 'https://picsum.photos/id/679/200/200',
      slide_3: 'https://picsum.photos/id/679/200/200'
    };
    res.render("login", templateVars);
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
  });
  return router;
};
// app.get("/login", (req, res) => {
//   const user = getIDfromEmail(users, req.body.email);
//   if (user) {
//     req.session.user_id = user.id;
//   }
//   let templateVars = {
//     user: users[req.session.user_id],
//     urls: urlsForUser(users[req.session.user_id], urlDatabase)

//   };
//   res.render("urls_login", templateVars);
// });



// module.exports = (db) => {
//   router.post("/login", (req, res) => {
//     db.query(`SELECT * FROM users;`)
//       .then(data => {
//         const users = data.rows;
//         res.json({ users });
//       })
//       .catch(err => {
//         res
//           .status(500)
//           .json({ error: err.message });
//       });
//   });
//   return router;
// };


// module.exports = function(router, database) {

//   // Create a new user
//   router.post('/', (req, res) => {
//     const user = req.body;
//     user.password = bcrypt.hashSync(user.password, 12);
//     database.addUser(user)
//       .then(user => {
//         if (!user) {
//           res.send({error: "error"});
//           return;
//         }
//         req.session.userId = user.id;
//         res.send("🤗");
//       })
//       .catch(e => res.send(e));
//   });

//   /**
//    * Check if a user exists with a given username and password
//    * @param {String} email
//    * @param {String} password encrypted
//    */
//   const login =  function(email, password) {
//     return database.getUserWithEmail(email)
//       .then(user => {
//         if (bcrypt.compareSync(password, user.password)) {
//           return user;
//         }
//         return null;
//       });
//   };
//   exports.login = login;

//   router.post('/login', (req, res) => {
//     const {email, password} = req.body;
//     login(email, password)
//       .then(user => {
//         if (!user) {
//           res.send({error: "error"});
//           return;
//         }
//         req.session.userId = user.id;
//         res.send({user: {name: user.name, email: user.email, id: user.id}});
//       })
//       .catch(e => res.send(e));
//   });

//   router.post('/logout', (req, res) => {
//     req.session.userId = null;
//     res.send({});
//   });

//   router.get("/me", (req, res) => {
//     const userId = req.session.userId;
//     if (!userId) {
//       res.send({message: "not logged in"});
//       return;
//     }

//     database.getUserWithId(userId)
//       .then(user => {
//         if (!user) {
//           res.send({error: "no user with that id"});
//           return;
//         }

//         res.send({user: {name: user.name, email: user.email, id: userId}});
//       })
//       .catch(e => res.send(e));
//   });

//   return router;
// };

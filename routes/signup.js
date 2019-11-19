const express = require('express');
const router  = express.Router();
const dh = require('../helpers/dataHelpers');

// module.exports = (db) => {

//   router.post("/", (req, res) => {
//     const {name, phone, email, password} = req.body;
//     login(email, password)
//       .then(user => {
//         console.log("a-------------------------------------asdfsa");
//         if (!user) {
//           res.send({error: "error"});
//           return;
//         }
//         // sets cookie
//         req.session.user_id = user.id;
//         console.log(user);
//         req.session.user_name = user.name;
//         res.redirect("/restaurants");
//         console.log(user.name);
//         // res.send({user: {name: user.name, email: user.email, phone: user.phone, id: req.session.user_id}});
//       })
//       .catch(e=> res.send(e));
//   });

//   router.get("/", (req, res) => {
//     const user = dh(db).getUserWithEmail();
//     if (req.session.user_id) {
//       res.redirect("/restaurants");
//     }
//     if (user) {
//       req.session.user_id = user.id;
//       let templateVars = {
//         username: null,
//         // user_id: user.id,
//         order_history: 'ORDER HISTORY',
//         slide_1: 'https://picsum.photos/id/679/200/200',
//         slide_2: 'https://picsum.photos/id/679/200/200',
//         slide_3: 'https://picsum.photos/id/679/200/200'
//       };
//       // console.log(user);
//       res.render("login", templateVars);
//       // res.redirect("/restaurants");
//     }

//   });
//   return router;
// };

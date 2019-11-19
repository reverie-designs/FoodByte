const express = require('express');
const router  = express.Router();
const dh = require('../helpers/dataHelpers');


module.exports = (db) => {
  /**
 * checks if a passed in email and password are in the database return null if not.
 * @param {email} user.email
 * @param {password} user.password
 */
  router.post('/', (req, res) => {
    console.log(req.body);
    //const {name, phone, email, password} = req.body;
    let obj = {};
    obj.name = req.body.name; obj.phone = req.body.phone; obj.email = req.body.email; obj.password = req.body.password;
    console.log(obj);
    dh(db).addUser(obj)
      .then(user => {
        if (!user) {
          res.send({error: "error"});
          return;
        }
        req.session.user_id = user.id;
        req.session.user_name = user.name;
        res.redirect("/restaurants");
      })
      .catch(e => res.send(e));
  });



  // const login = (email, password) => {
  //   return dh(db).getUserWithEmail(email)
  //     .then(user => {
  //       if (password === user.password) {
  //         return user;
  //       }
  //       return null;
  //     });
  // };

  // router.post("/", (req, res) => {
  //   const {name, phone, email, password} = req.body;
  //   login(email, password)
  //     .then(user => {
  //       // will add new user if user doesnt exist
  //       if (!user) {

  //         let obj = {};
  //         obj.name = name; obj.phone = phone; obj.email = email; obj.password = password;
  //         dh(db).adduser(obj)
  //         return;
  //       }
  //       // sets cookie
  //       req.session.user_id = user.id;
  //       console.log(user);
  //       req.session.user_name = user.name;
  //       res.redirect("/restaurants");
  //       console.log(user.name);
  //       // res.send({user: {name: user.name, email: user.email, phone: user.phone, id: req.session.user_id}});
  //     })
  //     .catch(e=> res.send(e));
  // });

  // router.get("/", (req, res) => {
  //   const user = dh(db).getUserWithEmail();
  //   if (req.session.user_id) {
  //     res.redirect("/restaurants");
  //   }
  //   if (user) {
  //     req.session.user_id = user.id;
  //     let templateVars = {
  //       username: null,
  //       // user_id: user.id,
  //       order_history: 'ORDER HISTORY',
  //       slide_1: 'https://picsum.photos/id/679/200/200',
  //       slide_2: 'https://picsum.photos/id/679/200/200',
  //       slide_3: 'https://picsum.photos/id/679/200/200'
  //     };
  //     // console.log(user);
  //     res.render("login", templateVars);
  //     // res.redirect("/restaurants");
  //   }

  // });
  return router;
};

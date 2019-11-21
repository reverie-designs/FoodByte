const express = require('express');
const router  = express.Router();
const dh = require('../helpers/dataHelpers');

module.exports = (db) => {
  /**
 * checks if a passed in email and password are in the database return null if not.
 * @param {email} user.email
 * @param {password} user.password
 */
  const login = (email, password) => {
    return dh(db).getUserWithEmail(email)
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
          res.redirect("/login"); // checks to see if a password exists for this user
          // res.send({error: "error"});
          // return;
        }
        // sets cookie
        req.session.user_id = user.id;
        req.session.user_name = user.name;
        res.redirect("/restaurants");
      })
      .catch(() => res.redirect('/login')); // redirects if the email doesnt exist
  });

  router.get("/", (req, res) => {
    const user = dh(db).getUserWithEmail();
    if (req.session.user_id) {
      res.redirect("/restaurants");
    }
    if (user) {
      req.session.user_id = user.id;
      let templateVars = {
        username: null,
        duration: null,
        order_history: 'ORDER HISTORY',
        slide_1: 'https://picsum.photos/id/679/200/200',
        slide_2: 'https://picsum.photos/id/679/200/200',
        slide_3: 'https://picsum.photos/id/679/200/200'
      };
      res.render("login", templateVars);

    }

  });
  return router;
};

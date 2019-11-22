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
    if (req.session.user_id) {
      res.redirect("/restaurants");
    }
    //const {name, phone, email, password} = req.body;
    let obj = {};
    obj.name = req.body.name; obj.phone = req.body.phone; obj.email = req.body.email; obj.password = req.body.password;
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

  return router;
};

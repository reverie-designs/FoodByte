const express = require('express');
const router  = express.Router();
// const dh = require('../helpers/dataHelpers');

module.exports = () => {
  router.get("/:id", (req, res) => {
    console.log('......................................hey');
    console.log(req.params.id);
    res.send('<h1>Order has been placed</h1>');
  });
  return router;
};

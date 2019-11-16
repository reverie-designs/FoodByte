const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/restaurants/:id", (req, res) => {

    db.query(`SELECT * FROM restaurants WHERE restaurants.id = $1;`, );
      .then(data => {
        const restaurants = data.rows;
        res.json({ restaurants });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};

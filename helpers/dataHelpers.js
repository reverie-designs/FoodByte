module.exports = (db) => ({
  /**
     * returns all user data based on user id
     * @param {String} email
     * @param {String} password encrypted
     */
  getUserWithEmail: function(email) {
    return db.query(`
    SELECT *
    FROM users
    WHERE email = $1
    `, [email])
      .then(res => {
        return (res.rows.length > 0) ? res.rows[0] : null;
      });
  },

  /**
   * Populates the restaurants page with the different pages.
   */

  getAllRestaurants: function() {
    return db.query(`
    SELECT *
    FROM restaurants;
    `)
      .then(res => {
        return res.rows;
        // return (res.rows.length > 0) ? res.rows[0] : null;
      });
  },

  // module.exports= {getAllRestaurants};
  /**
   * Populates the restaurants_show page with the title,..., menu_items.
   * @param {Number} restaurant_id
   */
  getAllRestaurantMenuItems: function(restaurant_id) {
    return db.query(`
    SELECT *
    FROM menu_items
    WHERE menu_items.restaurant_id = $1;
    `, [restaurant_id])
      .then(res => {
        return (res.rows.length > 0) ? res.rows[0] : null;
      });
  },

  /**
   * Adds a user to the user database.
   * @param {Number} restaurant_id
   */

  addUser: function(obj) {
    return db.query(`
    INSERT INTO TABLE users (name, phone, email, password)
    VALUES $1, $2, $3, $4;
    `, [obj.name, obj.phone, obj.email, obj.password])
      .then(res => {
        return (res.rows.length > 0) ? res.rows[0] : null;
      });
  },

});

// module.exports = { getUserWithEmail, getAllRestaurants, getAllRestaurantMenuItems };

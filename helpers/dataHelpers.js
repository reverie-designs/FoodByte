module.exports = (db) => {
  /**
     * returns all user data based on user id
     * @param {String} email
     * @param {String} password encrypted
     */
  const getUserWithEmail = function(email) {
    return db.query(`
    SELECT *
    FROM users
    WHERE email = $1
    `, [email])
      .then(res => {
        return (res.rows.length > 0) ? res.rows[0] : null;
      });
  };

  /**
   * Populates the restaurants page with the different pages.
   */

  const getAllRestaurants = function() {
    return db.query(`
    SELECT *
    FROM restuarants;
    `)
      .then(res => {
        return (res.rows.length > 0) ? res.rows[0] : null;
      });
  };

  /**
   * Populates the restaurants_show page with the title,..., menu_items.
   * @param {Number} restaurant_id
   */
  const getAllRestaurantMenuItems = function(restaurant_id) {
    return db.query(`
    SELECT *
    FROM menu_items
    WHERE menu_items.restaurant_id = $1;
    `, [restaurant_id])
      .then(res => {
        return (res.rows.length > 0) ? res.rows[0] : null;
      });
  };

};

// module.exports = { getUserWithEmail, getAllRestaurants, getAllRestaurantMenuItems };
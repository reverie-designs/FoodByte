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
    SELECT menu_items.title AS Title, *
    FROM menu_items
    JOIN restaurants ON restaurants.id = restaurant_id
    WHERE menu_items.restaurant_id = $1;
    `, [restaurant_id])
      .then(res => {
        console.log(res.rows);
        return res.rows;
      });
  },

  /**
   * Adds a user to the user database.
   * @param {Number} restaurant_id
   */

  addUser: function(obj) {
    return db.query(`INSERT INTO users(name, phone, email, password) VALUES($1, $2, $3, $4) RETURNING *;`, [obj.name, obj.phone, obj.email, obj.password])
      .then(res => {
        return (res.rows.length > 0) ? res.rows[0] : null;
      });
  },

  /**
   * Filters a search by cuisine type.
   * @param {string} cuisine_type.
   */
  getCuisine: function(cuisine) {
    let cuisine_type = '';
    cuisine_type = (cuisine.length >= 7) ? cuisine.slice(1, cuisine.length - 1) : cuisine; // slices the 1st and last letter of the parameter for the ILIKE (case/ insensitive like) query
    let cuisines = []; cuisines.push(`%${cuisine_type}%`);
    return db.query(`SELECT * FROM restaurants WHERE cuisine_type ILIKE %${cuisines.length}%`)
      .then(res => {
        return res.rows;
      });
  }

});

// module.exports = { getUserWithEmail, getAllRestaurants, getAllRestaurantMenuItems };

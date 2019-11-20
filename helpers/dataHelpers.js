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
    SELECT menu_items.title AS itemName, menu_items.id AS menuid, *
    FROM menu_items
    JOIN restaurants ON restaurants.id = restaurant_id
    WHERE menu_items.restaurant_id = $1;
    `, [restaurant_id])
      .then(res => {
        // console.log(res.rows);
        return res.rows;
      });
  },
    /**
   * Creates a new order upon restaurant redirection with order user id and restaurant id
   * @param {Number} restaurant_id
   * @param {Number} userID
   */
  createOrder: function(userId, restaurant_id) {
    return db.query(`
    INSERT INTO orders(user_id, restaurant_id) VALUES ($1, $2)RETURNING *;`, [userId, restaurant_id])
      .then(res => {
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
   * Adds items to the order_item database.
   * @param {Object} order
   */
  addOrder: function(obj, orderID){
    const orderKeys = Object.keys(obj);
    const values=[];
    //
    for(let item of orderKeys){

      if (item !== "total_price" && item !== "order_id"){
      values.push(obj[item]);
      console.log('this is item', item);
      }
    }
    db.query(`INSERT INTO order_items(menu_item_id, order_id, quantity)`, values)

//       "INSERT INTO order_items (menu_item, order_id, quantity) VALUES $1", values
// `(${}, ${}, ${}),`


.then(res => {
      return true;
    })
  }
});


// module.exports = { getUserWithEmail, getAllRestaurants, getAllRestaurantMenuItems };

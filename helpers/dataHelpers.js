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
  addOrder: function(obj, orderID) {
    //gets array of order items key value pairs 0 menu_item_id
    let arrayKeys = Object.keys(obj).map((key)=> {
      return [Number(key), Number(obj[key])];
    });
    let values = [orderID];
    let queryString = 'INSERT INTO order_items (menu_item_id, quantity, order_id) VALUES ';
    let i = 1;
    arrayKeys.forEach(e => {
      i++;
      values.push(e[0]);
      queryString += `($${i},`;
      i++;
      values.push(e[1]);
      queryString += ` $${i},`;
      queryString  += ` $1),`;
    });

    queryString = queryString.slice(0,-1); //remove last comma
    queryString += ` RETURNING*;`;
    return db.query(queryString, values)
      .then(res => {
        console.log('THIS IS AN INSTERTED order', res.rows);
        return res.rows;
      });
  },

  /**
   * Sets the status value timestamp for the order.id in orders to now.
   * @param {number} id - orders.id
   */
  setOrderStatus: function(id) {
    return db.query(`
    UPDATE orders
    SET status = now()
    WHERE orders.id = $1
    RETURNING orders.id
    `, [id])
      .then(res => {
        return res.rows[0];
      });
  },

  /**
   * returns the time of the latest order_id.
   * @param {Number} user_id
   */
  getOrderTime: function(user_id) {
    return db.query(`
    SELECT time
    FROM orders
    WHERE user_id = $1
    ORDER BY orders.id DESC
    LIMIT 1;
    `, [user_id])
      .then(res => {
        return res.rows[0];
      });
  },

  /**
   * Sets the time column value when the restaurant responds with a duration of order.
   * @param {Number} time in minutes
   * @param {Number} id
   */

  setOrderTime: function(time, id) {
    return db.query(`
    UPDATE orders
    SET time = $1
    WHERE id = $2
    `, [time, id])
      .then(res => {
        return res.rows[0];
      });
  },

  /**
   * returns all the previous orders placed by a certain user.
   * @param {number} id - users.id
   */
  getOrderHistoryFromId: function(id) {
    return db.query(`
    SELECT orders.id AS orderid, restaurants.title AS restaurantName, restaurants.cover_photo_url AS pic
    FROM orders
    JOIN restaurants ON restaurants.id = restaurant_id
    JOIN order_items ON order_id = orders.id
    JOIN menu_items ON menu_items.id = menu_item_id
    WHERE orders.user_id = $1
    GROUP BY orders.id, restaurants.title, restaurants.cover_photo_url
    ORDER BY orders.id;
    `, [id])
      .then(res => {
        console.log(res.rows)
        return res.rows;
      });
  },

});

// module.exports = { getUserWithEmail, getAllRestaurants, getAllRestaurantMenuItems };

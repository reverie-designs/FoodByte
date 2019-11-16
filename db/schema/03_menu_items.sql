DROP TABLE IF EXISTS menu_items CASCADE;

/* TEST: price SMALLINT: test to see if price is okay */

CREATE TABLE menu_items (
  id SERIAL PRIMARY KEY NOT NULL,
  restaurant_id INTEGER REFERENCES restaurants(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,

  title VARCHAR(255) NOT NULL,
  description TEXT,
  price SMALLINT NOT NULL,
  quantity_remaining SMALLINT NOT NULL
);

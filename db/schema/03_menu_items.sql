DROP TABLE IF EXISTS menu_items CASCADE;

CREATE TABLE menu_items (
  id SERIAL PRIMARY KEY NOT NULL,
  restaurant_id INTEGER REFERENCES restaurants(id) ON DELETE CASCADE,

  title VARCHAR(255) NOT NULL,
  description TEXT,
  price MONEY NOT NULL,
  quantity_remaining SMALLINT NOT NULL
);

DROP TABLE IF EXISTS order_items CASCADE;

CREATE TABLE order_items (
  id SERIAL PRIMARY KEY NOT NULL,
  menu_item_id INTEGER REFERENCES menu_items(id) ON DELETE CASCADE,
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
  quantity SMALLINT NOT NULL
);

/* How to have multiple menu items selected?
How to restrict menu items only from 1 restuant id?
Should we delete orders_items and only have orders?*/

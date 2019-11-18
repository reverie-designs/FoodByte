DELETE FROM menu_items;
ALTER SEQUENCE menu_items_id_seq RESTART WITH 1;

/* Porchetta menu items */
INSERT INTO menu_items (restaurant_id, title, description, price, quantity_remaining)
VALUES (1, 'O.G Fried Chicken Sandwich', 'Franks Red Hot Sauce, lettuce, pickles & fresh herb ranch dressing.', 10.95, 10);

INSERT INTO menu_items (restaurant_id, title, description, price, quantity_remaining)
VALUES (1, 'French Fries', 'Freshly cut fried potatoes.', 3.95, 50);

INSERT INTO menu_items (restaurant_id, title, description, price, quantity_remaining)
VALUES (1, 'Porchetta Plate', 'Hand carved porchetta with crackling.', 12.95, 20);


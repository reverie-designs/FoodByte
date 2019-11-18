DELETE FROM menu_items;
ALTER SEQUENCE menu_items_id_seq RESTART WITH 1;

/* Porchetta menu items */
INSERT INTO menu_items (restaurant_id, title, description, price, quantity_remaining)
VALUES (1, 'O.G Fried Chicken Sandwich', 'Franks Red Hot Sauce, lettuce, pickles & fresh herb ranch dressing.', 10.95, 10);

INSERT INTO menu_items (restaurant_id, title, description, price, quantity_remaining)
VALUES (1, 'Porchetta Plate', 'Hand carved porchetta with crackling.', 12.95, 20);

INSERT INTO menu_items (restaurant_id, title, description, price, quantity_remaining)
VALUES (1, 'Fried Chicken Parmesan Sandwich', 'Tomato sauce, mozzarella & parmesan cheese on a toasted garlic bread bun.', 10.95, 30);

INSERT INTO menu_items (restaurant_id, title, description, price, quantity_remaining)
VALUES (1, 'French Fries', 'Freshly cut fried potatoes.', 3.95, 50);

INSERT INTO menu_items (restaurant_id, title, description, price, quantity_remaining)
VALUES (1, 'Baked Beans', 'Fresh canned beans baked on the stove top, yumm...', 3.95, 40);

INSERT INTO menu_items (restaurant_id, title, description, price, quantity_remaining)
VALUES (1, 'Perrier', 'Sparkling Water', 2.25, 50);

/* BIG SMOKE BURGER */
INSERT INTO menu_items (restaurant_id, title, description, price, quantity_remaining)
VALUES (2, 'The Classic Burger', 'Canadian AAA beef, char-grilled & hand crafted. Made fresh daily. Served with lettuce, tomatoes, pickles, onions, ketchup, mustard & mayo.', 7.25, 50);

INSERT INTO menu_items (restaurant_id, title, description, price, quantity_remaining)
VALUES (2, 'Smokey Bacon Burger', 'Smoked Canadian cheddar, bacon, lettuce, tomatoes, pickle, onions, ketchup, mustard & mayo.', 10.95, 50);

INSERT INTO menu_items (restaurant_id, title, description, price, quantity_remaining)
VALUES (2, 'Blue Burger', 'Avocado, gorgonzola, house-made rosemary-garlic mayo, lettuce & tomatoes.', 9.55, 50);

INSERT INTO menu_items (restaurant_id, title, description, price, quantity_remaining)
VALUES (2, 'Onion Rings', 'Crispy, breaded & lightly fried.', 5.15, 50);

INSERT INTO menu_items (restaurant_id, title, description, price, quantity_remaining)
VALUES (2, 'Garden Salad', 'Fresh garden salad served with lettuce, carrots, tomatoes & house dressing.', 4.10, 50);

INSERT INTO menu_items (restaurant_id, title, description, price, quantity_remaining)
VALUES (2, 'Old Fashioned Milkshake', 'Strawberry, vanilla or chocolate.', 5.35, 50);

/* Coco Rice Thai Cuisine */
INSERT INTO menu_items (restaurant_id, title, description, price, quantity_remaining)
VALUES (1, 'Perrier', 'Sparkling Water', 2.25, 50);

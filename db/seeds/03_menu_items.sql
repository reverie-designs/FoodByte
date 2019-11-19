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
VALUES (3, 'Pad Thai', 'Rice noodles, chicken, tiger shrimp, eggs, tofu, green onions, bean sprouts & ground peanuts with Pad Thai sauce.', 13.00, 50);

INSERT INTO menu_items (restaurant_id, title, description, price, quantity_remaining)
VALUES (3, 'Vegetarian Basil Noodles', 'Thai style rice noodles stir-fried with tofu, eggs, chilli, shiitake mushrooms, basil leaves & mixed vegetables. Medium Spicy.', 13.00, 50);

INSERT INTO menu_items (restaurant_id, title, description, price, quantity_remaining)
VALUES (3, 'Pork Chow Mein', 'Steamed chow mein, red pork roast, wontons & vegetables.', 15.00, 50);

INSERT INTO menu_items (restaurant_id, title, description, price, quantity_remaining)
VALUES (3, 'Green Curry Chicken & Rice', 'Served with a daily roll & your choice of soup or salad of the day. Medium Spicy.', 10.95, 50);

INSERT INTO menu_items (restaurant_id, title, description, price, quantity_remaining)
VALUES (3, 'Pineapple Fried Rice & Chicken', 'Served with a daily roll & your choice of soup or salad of the day.', 11.95, 50);

INSERT INTO menu_items (restaurant_id, title, description, price, quantity_remaining)
VALUES (3, 'Thai Iced Tea', 'Classic iced tea...with a thai twist', 3.00, 50);

/* Pizzaiolo */
INSERT INTO menu_items (restaurant_id, title, description, price, quantity_remaining)
VALUES (4, 'Sicilian Pizza Slice', 'Meaty and delicious', 4.42, 50);

INSERT INTO menu_items (restaurant_id, title, description, price, quantity_remaining)
VALUES (4, 'Fredo Pizza Slice (vegan)', 'For our lovely vegans', 4.42, 50);

INSERT INTO menu_items (restaurant_id, title, description, price, quantity_remaining)
VALUES (4, 'The Godfather Meat Pizza', 'Real Canadian bacon, Italian sausage, pepperoni, mozzarella cheese, parmigiano & our famous Pizzaiolo tomato sauce. Deep dish. Spicy.', 21.44, 50);

INSERT INTO menu_items (restaurant_id, title, description, price, quantity_remaining)
VALUES (4, 'Mediterranean Vegetarian Pizza', 'Mozzarella cheese, tomatoes, green peppers, black olives, feta cheese & our famous Pizzaiolo tomato sauce.', 18.95, 50);

INSERT INTO menu_items (restaurant_id, title, description, price, quantity_remaining)
VALUES (4, 'Caesar Salad', 'Fresh romaine lettuce, croutons & parmesan cheese. With Caesar dressing served on the side.', 4.99, 50);

INSERT INTO menu_items (restaurant_id, title, description, price, quantity_remaining)
VALUES (4, 'San Pellegrino', 'Refreshing Aranciata', 2.49, 50);

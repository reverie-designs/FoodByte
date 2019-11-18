DELETE FROM restaurants;
ALTER SEQUENCE restaurants_id_seq RESTART WITH 1;

INSERT INTO restaurants (title, cuisine_type, hours_of_operation, cover_photo_url, slide_1_url, slide_2_url, slide_3_url, street, city, province, post_code, country, phone)
VALUES ('Porchetta & Co.', 'Italian', '9:00AM - 10:45PM', 'database_photos/restaurants/Porchetta/Porchetta_cover_photo.png', 'database_photos/restaurants/Porchetta/Porchetta_slide_1.png', 'database_photos/restaurants/Porchetta/Porchetta_slide_2.png', 'database_photos/restaurants/Porchetta/Porchetta_slide_3.png', '545 King St W', 'Toronto', 'ON', 'M5V 1M1', 'Canada', '4165541122');

INSERT INTO restaurants (title, cuisine_type, hours_of_operation, cover_photo_url, slide_1_url, slide_2_url, slide_3_url, street, city, province, post_code, country, phone)
VALUES ('BIG SMOKE BURGER', 'American', '11:00AM - 11:00PM', 'database_photos/restaurants/BIG SMOKE BURGER/BIG SMOKE BURGER_cover_photo.png', 'database_photos/restaurants/BIG SMOKE BURGER/BIG SMOKE BURGER_slide_1.png', 'database_photos/restaurants/BIG SMOKE BURGER/BIG SMOKE BURGER_slide_2.png', 'database_photos/restaurants/BIG SMOKE BURGER/BIG SMOKE BURGER_slide_3.png', '573 King St W', 'Toronto', 'ON', 'M5V 1M1', 'Canada', '4165541122');

INSERT INTO restaurants (title, cuisine_type, hours_of_operation, cover_photo_url, slide_1_url, slide_2_url, slide_3_url, street, city, province, post_code, country, phone)
VALUES ('Coco Rice Thai Cuisine', 'Thai', '11:00AM - 10:30PM', 'database_photos/restaurants/Coco Rice Thai Cuisine/Coco Rice Thai Cuisine_cover_photo.png', 'database_photos/restaurants/Coco Rice Thai Cuisine/Coco Rice Thai Cuisine_slide_1.png', 'database_photos/restaurants/Coco Rice Thai Cuisine/Coco Rice Thai Cuisine_slide_2.png', 'database_photos/restaurants/Coco Rice Thai Cuisine/Coco Rice Thai Cuisine_slide_3.png', '669 King St W', 'Toronto', 'ON', 'M5V 1M9', 'Canada', '4165541122');

INSERT INTO restaurants (title, cuisine_type, hours_of_operation, cover_photo_url, slide_1_url, slide_2_url, slide_3_url, street, city, province, post_code, country, phone)
VALUES ('Pizzaiolo', 'Italian', '10:00AM - 12:00AM', 'database_photos/restaurants/Pizzaiolo/Pizzaiolo_cover_photo.png', 'database_photos/restaurants/Pizzaiolo/Pizzaiolo_slide_1.png', 'database_photos/restaurants/Pizzaiolo/Pizzaiolo_slide_2.png', 'database_photos/restaurants/Pizzaiolo/Pizzaiolo_slide_3.png', '615 King St W', 'Toronto', 'ON', 'M5V 1M5', 'Canada', '4165541122');

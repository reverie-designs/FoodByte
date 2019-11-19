DROP TABLE IF EXISTS restaurants CASCADE;

CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY NOT NULL,
  owner_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  active BOOLEAN DEFAULT TRUE,

  title VARCHAR(255) NOT NULL,
  cuisine_type VARCHAR(255) NOT NULL,
  hours_of_operation VARCHAR(255) NOT NULL,
  cover_photo_url VARCHAR(255) NOT NULL,
  slide_1_url VARCHAR(255) NOT NULL,
  slide_2_url VARCHAR(255) NOT NULL,
  slide_3_url VARCHAR(255) NOT NULL,

  street VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  province VARCHAR(255) NOT NULL,
  post_code VARCHAR(255) NOT NULL,
  country VARCHAR(255) NOT NULL,
  phone VARCHAR(255) NOT NULL
);
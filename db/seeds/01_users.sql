DELETE FROM users;
ALTER SEQUENCE users_id_seq RESTART WITH 1;

INSERT INTO users (name, phone, email, password, profile_pic_URL)
VALUES ('Hungry Guy', '905-123-1234', 'hungryguy@gmail.com', 'hunger', 'database_photos/users/002-meat.eps');

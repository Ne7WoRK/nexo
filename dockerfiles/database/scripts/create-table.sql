CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL
);

INSERT INTO users (username, email, phone)
VALUES 
  ('ivan.popov', 'ivan.popov@nexo.io', '123-456-7890'),
  ('ralica.veleva', 'ralica.veleva@nexo.io', '987-654-3210');

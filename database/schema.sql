DROP DATABASE IF EXISTS KDM;
CREATE DATABASE KDM;
USE KDM;

-- User table
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  user_id serial PRIMARY KEY,
  username VARCHAR(60) NOT NULL,
  email VARCHAR(250) NOT NULL,
  password VARCHAR(250) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT current_timestamp
);

INSERT INTO users (username, email, password)
VALUES
('hailey', 'haileybee1231@gmail.com', '$2a$10$MHRAAxfcRiwToSSUOUD3wupECrfeq2SwWXouBqrh8SGV7AR/KK28G'),

('brittany', 'brittanyartimez@gmail.com', '$2a$10$MHRAAxfcRiwToSSUOUD3wupECrfeq2SwWXouBqrh8SGV7AR/KK28G');

-- mysql -u root < schemamysql.sql

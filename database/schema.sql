DROP DATABASE IF EXISTS KDM;
CREATE DATABASE KDM;
USE KDM;

-- User table
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS campaigns;
DROP TABLE IF EXISTS survivors;

CREATE TABLE users (
  user_id serial PRIMARY KEY,
  username VARCHAR(60) NOT NULL,
  email VARCHAR(250) NOT NULL,
  password VARCHAR(250) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT current_timestamp
);

CREATE TABLE campaigns (
  campaign_id serial PRIMARY KEY,
  owner INT NOT NULL,
  name VARCHAR(250) NOT NULL,
  lantern_year INT NOT NULL DEFAULT '0',
  survivor_count INT NOT NULL DEFAULT '8',
  created_at TIMESTAMP NOT NULL DEFAULT current_timestamp
);

CREATE TABLE survivors (
	survivor_id serial PRIMARY KEY,
	name VARCHAR(250) NOT NULL,
	level INT NOT NULL DEFAULT '1',
	campaign INT REFERENCES campaigns NOT NULL
);

INSERT INTO users (username, email, password)
VALUES
('hailey', 'haileybee1231@gmail.com', '$2a$10$r1evqMMebZLf/C.ww5t2pe.2k7.sSYIbjfVtVzvcuvDO3wdFLZCAy'),

('brittany', 'brittanyartimez@gmail.com', '$2a$10$r1evqMMebZLf/C.ww5t2pe.2k7.sSYIbjfVtVzvcuvDO3wdFLZCAy');

INSERT INTO campaigns (owner, name, lantern_year, survivor_count)
VALUES
('1', 'Test 1', '1', '8'),
('1', 'Test 2', '1', '8'),
('2', 'Test 1', '1', '8'),
('2', 'Test 2', '1', '8'),

-- mysql -u root < schemamysql.sql

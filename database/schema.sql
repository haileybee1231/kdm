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
	name VARCHAR(250) DEFAULT 'Unnamed',
	gender BOOLEAN DEFAULT 'f', 
  survival INT DEFAULT '0',
  dodge BOOLEAN DEFAULT 'f',
  encourage BOOLEAN DEFAULT 'f',
  surge BOOLEAN DEFAULT 'f',
  dash BOOLEAN DEFAULT 'f',
  movement INT DEFAULT '5',
  accuracy INT DEFAULT '0',
  strength INT DEFAULT '0',
  evasion INT DEFAULT '0',
  luck INT DEFAULT '0',
  speed INT DEFAULT '0',
  insanity INT DEFAULT '0',
  head_armor INT DEFAULT '0',
  arms_armor INT DEFAULT '0',
  body_armor INT DEFAULT '0',
  waist_armor INT DEFAULT '0',
  legs_armor INT DEFAULT '0',
  head_heavy_injury BOOLEAN DEFAULT 'f',
  arms_light_injury BOOLEAN DEFAULT 'f',
  arms_heavy_injury BOOLEAN DEFAULT 'f',
  body_light_injury BOOLEAN DEFAULT 'f',
  body_heavy_injury BOOLEAN DEFAULT 'f',
  waist_light_injury BOOLEAN DEFAULT 'f',
  waist_heavy_injury BOOLEAN DEFAULT 'f',
  legs_light_injury BOOLEAN DEFAULT 'f',
  legs_heavy_injury BOOLEAN DEFAULT 'f',
  hunt_xp INT DEFAULT '0',
  weapon_proficiency VARCHAR(250),
  proficiency_score INT DEFAULT '0',
  courage INT DEFAULT '0',
  understanding INT DEFAULT '0',
  stalwart BOOLEAN DEFAULT 'f',
  prepared BOOLEAN DEFAULT 'f',
  matchmaker BOOLEAN DEFAULT 'f',
  analyze_skill BOOLEAN DEFAULT 'f',
  explore BOOLEAN DEFAULT 'f',
  tinker BOOLEAN DEFAULT 'f',
  can_use_fighting_arts BOOLEAN DEFAULT 't',
  fighting_art_1 INT REFERENCES fighting_arts,
  fighting_art_2 INT REFERENCES fighting_arts,
  fighting_art_3 INT REFERENCES fighting_arts,
  disorder_1 INT REFERENCES disorders,
  disorder_2 INT REFERENCES disorders,
  disorder_3 INT REFERENCES disorders,
	campaign INT REFERENCES campaigns NOT NULL
);

CREATE TABLE fighting_arts (
  fighting_art_id SERIAL PRIMARY KEY,
  name VARCHAR(250)
);

CREATE TABLE disorders (
  disorder_id SERIAL PRIMARY KEY,
  name VARCHAR(250)
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
('2', 'Test 2', '1', '8');

INSERT INTO survivors (name, gender, survival, campaign)
VALUES 
('Hermione', 'f', '3', '1'),
('Baby-Person', 't', '3', '1'),
('Senua', 'f', '3', '1'),
('Harry', 't', '3', '1');

INSERT INTO survivors (gender, survival, campaign)
VALUES 
('f', '3', '1'),
('t', '3', '1'),
('f', '3', '1'),
('t', '3', '1');

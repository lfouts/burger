CREATE DATABASE IF NOT EXISTS burgers_db;

USE burgers_db;

 //if the db is already there, this deletes it

DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers(
	id INTEGER AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(50),
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
    );

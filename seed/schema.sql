DROP DATABASE IF EXISTS photoService;
CREATE DATABASE photoService;
USE photoService;

DROP TABLE IF EXISTS photos;

CREATE TABLE photos (
  id INT NOT NULL AUTO_INCREMENT,
  headerImage varchar(255),
  mainImages text,
  randomPage varchar(255),
  PRIMARY KEY (id)
)

/*  Execute this file from the command line by typing:
 *    mysql -u root < db/schema.sql
 *  to create the database and the tables.*/
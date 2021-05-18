DROP DATABASE IF EXISTS photoService;
CREATE DATABASE photoService;
USE photoService;

DROP TABLE IF EXISTS headerImages;

CREATE TABLE headerImages (
  id INT NOT NULL AUTO_INCREMENT,
  headerImage varchar(255),
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS mainImages;

CREATE TABLE mainImages (
  id INT NOT NULL AUTO_INCREMENT,
  main varchar(255),
  thumb varchar(255),
  headerImageId INT,
  PRIMARY KEY (id),
  FOREIGN KEY (headerImageId) REFERENCES headerImages(id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < seed/schema.sql
 *  to create the database and the tables.*/
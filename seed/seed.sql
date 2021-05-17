USE photoService;

LOAD DATA LOCAL INFILE '/Users/maxpro/Documents/hackreactor/senior/sdc/anthony-photo-gallery-service/seed/data/pages.csv'
INTO TABLE photos
FIELDS TERMINATED BY '\t'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS (id, headerImage, mainImages, randomPage)

/*  Execute this file from the command line by typing:
 *    mysql -u root < db/seed.sql
 *  to create the database and the tables.*/

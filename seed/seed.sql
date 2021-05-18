SET profiling=1;

USE photoService;

LOAD DATA LOCAL INFILE '/Users/maxpro/Documents/hackreactor/senior/sdc/anthony-photo-gallery-service/seed/data/headerImages.csv'
INTO TABLE headerImages
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
(id, headerImage);

LOAD DATA LOCAL INFILE '/Users/maxpro/Documents/hackreactor/senior/sdc/anthony-photo-gallery-service/seed/data/mainImages.csv'
INTO TABLE mainImages
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
(main, thumb, headerImageId);

SHOW PROFILES;

/*  Execute this file from the command line by typing:
 *    mysql -u root < seed/seed.sql
 *  to create the database and the tables.*/

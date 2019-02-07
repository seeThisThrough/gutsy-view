drop database gutsy;
create database gutsy;

use gutsy;

create table adventures (
  trip_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title text,
  category text,
  image_url text,
  description text,
  price INT NOT NULL DEFAULT 0

)

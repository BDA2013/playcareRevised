DROP DATABASE IF EXISTS playcare_db;
CREATE DATABASE playcare_db;

USE playcare_db;

CREATE TABLE child (
  id INT NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  parent_email VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE scheudle (
  id INT NOT NULL,
  setDate VARCHAR(10),
  child_id INT,
  FOREIGN KEY (child_id)
  REFERENCES child(id)
  ON DELETE SET NULL
);
DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  quantity INT NULL,
  PRIMARY KEY (id)
);
INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("lumber", "building materials", 5, 40);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("window", "building materials", 10, 60);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("nails", "building materials", 1, 1000);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("hammer", "tools", 2, 10);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("drill", "tools", 40, 35);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("nail gun", "tools", 80, 10);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("tape measure", "tools", 10, 100);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("eye protection", "safety", 2, 20);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("gloves", "safety", 1, 50);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("ear plugs", "safety", 2, 150);

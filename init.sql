CREATE USER 'dennys'@'%' IDENTIFIED WITH mysql_native_password BY
'demo';
GRANT ALL PRIVILEGES ON *.* TO 'dennys'@'%' WITH GRANT OPTION;

CREATE DATABASE IF NOT EXISTS demo;
USE demo;

CREATE TABLE IF NOT EXISTS users (
id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);
INSERT INTO users (name, email) VALUES
('Usuario 1', 'usuario1@example.com'),
('Usuario 2', 'usuario2@example.com');

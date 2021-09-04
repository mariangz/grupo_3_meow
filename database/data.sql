-- MySQL dump 10.13  Distrib 8.0.26, for macos11 (x86_64)
--
-- Host: 127.0.0.1    Database: meow_db
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE DATABASE `meow_db` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `meow_db`;

--
-- Table structure for table `Products`
--

DROP TABLE IF EXISTS `Products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;

CREATE TABLE `Products` (
  `product_id` int NOT NULL AUTO_INCREMENT,
  `productName` varchar(50) NOT NULL,
  `productPrice` decimal(10,0) NOT NULL,
  `shortDescription` varchar(120) NOT NULL,
  `nutritionalDetail` varchar(500) NOT NULL,
  `productImage` varchar(50) NOT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `Products`
--
INSERT INTO Products (product_id, productName, productPrice, shortDescription, nutritionalDetail, productImage) VALUES
(1, 'Pescado', 590, 'Trocitos de la mejor variedad de pescados con una deliciosa salsa ligera, 100% húmedo y sabroso!', 'Es un alimento completo y balanceado, 100% húmedo y sabroso! Está hecho con trocitos de la mejor variedad de pescados con una deliciosa salsa ligera, que aportan a tu gato los nutrientes que necesita para mantenerse sano y fuerte. Además, su textura y sabor son ideales para aquellos que tienen el paladar exigente.', 'pescado.jpeg'),
(2, 'Salmon', 600, 'Sabrosos trocitos de salmón horneado a fuego lento, que tu gato no podrá resistirse.', 'Es un alimento húmedo 100% super sabroso, completo y balanceado. Hecho de delicados trozos de salmón, sumergidos en una abundante salsa ligera y deliciosa. Es ideal para los gatos fanáticos y para aquellos que tienen el paladar exigente. Aporta a tu gato los nutrientes que necesita para mantenerse sano y fuerte!', 'salmon.jpeg'),
(3, 'Carne', 500, 'Suaves trocitos de la mejor carne de vaca cocidos al vapor con salsa, 100% húmedo y sabroso!', 'Es un alimento completo y equilibrado, 100% húmedo que contiene suaves trocitos de carne de vaca cocidos al vapor con salsa. Formulado con proteínas de origen animal que ayudan a proporcionar los nutrientes que tu gato necesita todos los días para estar saludable. Cada porción contribuye con la vitalidad y energía necesarias para explorar el mundo!', 'carne.jpeg'),
(4, 'Vegetales', 490, 'La mejor selección de vegetales para lograr un balance perfecto en la alimentación de tu gato.', 'Es un alimento completo y equilibrado que ayuda a mantener un buen estado de salud. Los mejores vegetales seleccionados cuidadosamente para lograr un balance perfecto en la alimentación de tu gato. Proporciona un aporte calórico moderado perfectamente adaptado a las necesidades del gato con actividad moderada, que ayuda a mantener un buen estado de salud.', 'vetetariano.jpeg'),
(5, 'Pollo', 360, 'Deliciosos trocitos de pollo con abundante salsa, para que tu gato disfrute en cualquier momento.', 'Es un alimento completo y equilibrado, 100% húmedo super sabroso. Cada porción combina un sabor delicado, que lo hace delicioso y nutritivo! Formulado con proteínas de pollo, 90% de pechuga y muslo con abundante salsa, para que tu gato disfrute en cualquier momento. Proporciona un aporte calórico moderado perfectamente adaptado a las necesidades del gato con actividad moderada, que ayuda a mantener un buen estado de salud.', 'pollo.jpeg'),
(6, 'Atún', 390, 'Delicados trozos de atún con una deliciosa salsa, ideal para aquellos que tienen el paladar exigente.', 'Es un alimento húmedo 100% super sabroso, completo y balanceado. Hecho de delicados trozos de atún, sumergidos en una abundante salsa ligera y deliciosa. Es ideal para los gatos fanáticos de las salsas y para aquellos que tienen el paladar exigente. Aporta a tu gato los nutrientes que necesita para mantenerse sano y fuerte!', 'atun.jpeg');


--
-- Table structure for table `Categories`
--

DROP TABLE IF EXISTS `Categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Categories` (
  `category_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `Categories`
--
INSERT INTO Categories (category_id, name) VALUES
(1, 'Cachoro'),
(2, 'Adulto'),
(3, 'Senior');

--
-- Table structure for table `ProductsCategories`
--

DROP TABLE IF EXISTS `ProductsCategories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ProductsCategories` (
  `productCategory_id` int NOT NULL AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `category_id` int NOT NULL,
  PRIMARY KEY (`productCategory_id`),
  KEY `product_id` (`product_id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `productscategories_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `Products` (`product_id`),
  CONSTRAINT `productscategories_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `Categories` (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `ProductsCategories`
--
INSERT INTO ProductsCategories (productCategory_id, product_Id, Category_id) VALUES
(1,1,1),
(2,1,2),
(3,1,3),
(4,2,1),
(5,2,2),
(6,2,3),
(7,3,1),
(8,3,2),
(9,3,3),
(10,4,1),
(11,4,2),
(12,4,3),
(13,5,1),
(14,5,2),
(15,5,3),
(16,6,1),
(17,6,2),
(18,6,3);

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(8) NOT NULL,
  `confirmPassword` varchar(8) NOT NULL,
  `image` varchar(50) NOT NULL,
  `rights` varchar(3),
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
--
-- Dumping data for table `Users`
--
INSERT INTO Users (user_id, name, email, password, confirmpassword, image, rights) VALUES
(1,'Administrador', 'mariano@meow.com.ar', '1234', '1234', 'default.png', 'admin'),
(2,'Administrador', 'analia@meow.com.ar', '1234', '1234', 'default.png', 'admin'),
(3,'Administrador', 'naralia@meow.com.ar', '1234', '1234', 'default.png', 'admin'),
(4,'UsuarioPrueba', 'prueba@gmail.com', 'hola', 'hola', 'uno.png', null);


--
-- Table structure for table `Payments`
--

DROP TABLE IF EXISTS `Payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Payments` (
  `payment_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`payment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `Payments`
--
INSERT INTO Payments (Payment_id, name) VALUES
(1, 'MercadoPago');

--
-- Table structure for table `Orders`
--

DROP TABLE IF EXISTS `Orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Orders` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `product_id` int NOT NULL,
  `payment_id` int NOT NULL,
  PRIMARY KEY (`order_id`),
  KEY `user_id` (`user_id`),
  KEY `product_id` (`product_id`),
  KEY `payment_id` (`payment_id`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`),
  CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `Products` (`product_id`),
  CONSTRAINT `orders_ibfk_3` FOREIGN KEY (`payment_id`) REFERENCES `Payments` (`payment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;


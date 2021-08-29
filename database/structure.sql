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
-- Table structure for table `ProductsCategories`
--

DROP TABLE IF EXISTS `ProductsCategories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ProductsCategories` (
  `productCategory_id` int NOT NULL AUTO_INCREMENT,
  `categoryId` int NOT NULL,
  `productId` int NOT NULL,
  PRIMARY KEY (`productCategory_id`),
  KEY `categoryId` (`categoryId`),
  KEY `productId` (`productId`),
  CONSTRAINT `productscategories_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `Categories` (`category_id`),
  CONSTRAINT `productscategories_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `Products` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Table structure for table `Roles`
--

DROP TABLE IF EXISTS `Roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Roles` (
  `role_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;


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
  `roleId` int NOT NULL,
  PRIMARY KEY (`user_id`),
  KEY `roleId` (`roleId`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `Roles` (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

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
-- Table structure for table `Orders`
--

DROP TABLE IF EXISTS `Orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Orders` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `productId` int NOT NULL,
  `paymentId` int NOT NULL,
  PRIMARY KEY (`order_id`),
  KEY `userId` (`userId`),
  KEY `productId` (`productId`),
  KEY `paymentId` (`paymentId`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `Users` (`user_id`),
  CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `Products` (`product_id`),
  CONSTRAINT `orders_ibfk_3` FOREIGN KEY (`paymentId`) REFERENCES `Payments` (`payment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;


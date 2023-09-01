-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: prodata1
-- ------------------------------------------------------
-- Server version	8.0.31

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

--
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brands` (
  `b_id` int NOT NULL AUTO_INCREMENT,
  `b_name` varchar(255) NOT NULL,
  PRIMARY KEY (`b_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'Brand A'),(2,'Brand B'),(3,'HRX');
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `c_id` int NOT NULL AUTO_INCREMENT,
  `c_name` varchar(255) NOT NULL,
  PRIMARY KEY (`c_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Shirts'),(2,'Pants'),(3,'Bedsheets');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `c_id` int NOT NULL AUTO_INCREMENT,
  `c_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `contact` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `l_id` int DEFAULT NULL,
  PRIMARY KEY (`c_id`),
  KEY `customer_ibfk_1` (`l_id`),
  CONSTRAINT `customer_ibfk_1` FOREIGN KEY (`l_id`) REFERENCES `login` (`l_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (1,'Prashant','prashat@gmail.com','7083663215','At post Pune',1),(4,'Ruturaj Yadav','ruturaj@gmail.com','7375923648','Karad',11);
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login` (
  `l_id` int NOT NULL AUTO_INCREMENT,
  `uid` varchar(255) DEFAULT NULL,
  `pwd` varchar(255) DEFAULT NULL,
  `role_id` int DEFAULT NULL,
  `status` tinyint NOT NULL,
  PRIMARY KEY (`l_id`),
  UNIQUE KEY `uid` (`uid`),
  KEY `role_id` (`role_id`),
  CONSTRAINT `login_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `role` (`r_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` VALUES (1,'Prashant','12333',1,0),(2,'Suraj','1234',2,1),(3,'object','1111',2,0),(4,'Sk','1234',2,1),(5,'dhfdj','5464846',2,0),(6,'tgtg','bhjbhjbjh',2,0),(8,'new','2452',2,0),(9,'tejas','password@46',3,1),(10,'mavi','mavi@123',2,0),(11,'Ruturaj','Ruturaj@47',1,1);
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ordereditems`
--

DROP TABLE IF EXISTS `ordereditems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ordereditems` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` int NOT NULL,
  `p_id` int NOT NULL,
  `quantity` int DEFAULT NULL,
  `price` double DEFAULT NULL,
  `prod_id` int DEFAULT NULL,
  `o_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `o_id` (`order_id`),
  KEY `p_id` (`p_id`),
  KEY `FKa1h7cuampnj63wq8umoxrrlqw` (`prod_id`),
  KEY `FK252q49eiwi2v1fpl5tqq5x0gp` (`o_id`),
  CONSTRAINT `FK252q49eiwi2v1fpl5tqq5x0gp` FOREIGN KEY (`o_id`) REFERENCES `orders` (`o_id`),
  CONSTRAINT `FKa1h7cuampnj63wq8umoxrrlqw` FOREIGN KEY (`prod_id`) REFERENCES `products` (`p_id`),
  CONSTRAINT `o_pid` FOREIGN KEY (`order_id`) REFERENCES `orders` (`o_id`),
  CONSTRAINT `ordereditems_ibfk_2` FOREIGN KEY (`p_id`) REFERENCES `products` (`p_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ordereditems`
--

LOCK TABLES `ordereditems` WRITE;
/*!40000 ALTER TABLE `ordereditems` DISABLE KEYS */;
INSERT INTO `ordereditems` VALUES (1,1,2,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `ordereditems` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `o_id` int NOT NULL AUTO_INCREMENT,
  `c_id` int NOT NULL,
  `date` date NOT NULL,
  `total_amount` double NOT NULL,
  `shipping_address` varchar(255) DEFAULT NULL,
  `id` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`o_id`),
  KEY `c_id` (`c_id`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`c_id`) REFERENCES `customer` (`c_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,1,'2023-08-23',150,'Pune',0),(2,1,'2023-08-27',5454,'ghvghv',1),(3,4,'2023-08-27',49.99,'Karad',1);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `p_id` int NOT NULL AUTO_INCREMENT,
  `p_name` varchar(255) NOT NULL,
  `p_desc` text,
  `price` decimal(10,2) NOT NULL,
  `s_id` int DEFAULT NULL,
  `b_id` int DEFAULT NULL,
  `c_id` int DEFAULT NULL,
  `v_id` int DEFAULT NULL,
  `quantity` int NOT NULL,
  `p_image` longblob,
  PRIMARY KEY (`p_id`),
  KEY `s_id` (`s_id`),
  KEY `b_id` (`b_id`),
  KEY `c_id` (`c_id`),
  KEY `v_id` (`v_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`s_id`) REFERENCES `sizes` (`s_id`),
  CONSTRAINT `products_ibfk_2` FOREIGN KEY (`b_id`) REFERENCES `brands` (`b_id`),
  CONSTRAINT `products_ibfk_3` FOREIGN KEY (`c_id`) REFERENCES `categories` (`c_id`),
  CONSTRAINT `products_ibfk_4` FOREIGN KEY (`v_id`) REFERENCES `vendor` (`v_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'T-shirt','Description for Product A',49.99,2,1,3,1,100,NULL),(2,'Jeans','Description for Product B',129.99,3,2,1,2,50,NULL),(3,'Trousers','Description for Product C',19.99,1,3,2,3,60,NULL),(4,'ghg','bnbn',100.00,3,3,2,4,12,NULL),(5,'clean beedsheet','soft',100.00,3,3,3,4,10,NULL),(6,'beedsheetsmall','clean',100.00,5,3,3,4,10,NULL),(7,'curtain','white',150.00,3,2,3,4,0,NULL),(8,'Bag','Black',500.00,3,2,2,4,10,NULL),(9,'blackbag','good',600.00,2,3,2,4,10,NULL),(10,'Gray','sdhsdj',1000.00,2,3,2,4,10,NULL),(11,'Bag','soft',130.00,2,2,3,4,0,NULL),(12,'Bag','soft',130.00,2,2,3,4,0,NULL),(13,'Bagddd','soft',130.00,2,2,3,4,10,NULL),(14,'Bagddd','soft',130.00,2,2,3,4,10,NULL),(15,'Gray','vfdvdf',500.00,4,2,2,4,0,NULL),(16,'dvsd','svs',13.00,2,2,2,4,10,NULL),(17,'dcdsdv','vdfffsfs',12.00,4,3,2,4,0,NULL),(18,'Trousser','Cotton',100.00,5,3,2,4,10,NULL),(19,'cyudjd','dnf em',11111.00,2,2,3,4,11,NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews` (
  `r_id` int NOT NULL AUTO_INCREMENT,
  `c_id` int NOT NULL,
  `p_id` int NOT NULL,
  `rating` int NOT NULL,
  PRIMARY KEY (`r_id`),
  KEY `c_id` (`c_id`),
  KEY `p_id` (`p_id`),
  CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`c_id`) REFERENCES `customer` (`c_id`),
  CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`p_id`) REFERENCES `products` (`p_id`),
  CONSTRAINT `reviews_chk_1` CHECK (((`rating` >= 1) and (`rating` <= 10)))
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (1,1,1,8);
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `r_id` int NOT NULL AUTO_INCREMENT,
  `role_name` varchar(50) NOT NULL,
  PRIMARY KEY (`r_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'Customer'),(2,'Vendor'),(3,'Admin');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sizes`
--

DROP TABLE IF EXISTS `sizes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sizes` (
  `s_id` int NOT NULL AUTO_INCREMENT,
  `size` varchar(50) NOT NULL,
  PRIMARY KEY (`s_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sizes`
--

LOCK TABLES `sizes` WRITE;
/*!40000 ALTER TABLE `sizes` DISABLE KEYS */;
INSERT INTO `sizes` VALUES (1,'S'),(2,'M'),(3,'L'),(4,'XL'),(5,'XXL');
/*!40000 ALTER TABLE `sizes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stock`
--

DROP TABLE IF EXISTS `stock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stock` (
  `st_id` int NOT NULL AUTO_INCREMENT,
  `qty` int NOT NULL,
  `p_id` int NOT NULL,
  `v_id` int NOT NULL,
  PRIMARY KEY (`st_id`),
  KEY `p_id` (`p_id`),
  KEY `v_id` (`v_id`),
  CONSTRAINT `stock_ibfk_1` FOREIGN KEY (`p_id`) REFERENCES `products` (`p_id`),
  CONSTRAINT `stock_ibfk_2` FOREIGN KEY (`v_id`) REFERENCES `vendor` (`v_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stock`
--

LOCK TABLES `stock` WRITE;
/*!40000 ALTER TABLE `stock` DISABLE KEYS */;
INSERT INTO `stock` VALUES (1,100,1,1);
/*!40000 ALTER TABLE `stock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendor`
--

DROP TABLE IF EXISTS `vendor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vendor` (
  `v_id` int NOT NULL AUTO_INCREMENT,
  `v_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `contact` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `shop_licence_id` varchar(255) DEFAULT NULL,
  `l_id` int DEFAULT NULL,
  PRIMARY KEY (`v_id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `shop_licence_id_UNIQUE` (`shop_licence_id`),
  KEY `vendor_ibfk_1` (`l_id`),
  CONSTRAINT `vendor_ibfk_1` FOREIGN KEY (`l_id`) REFERENCES `login` (`l_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendor`
--

LOCK TABLES `vendor` WRITE;
/*!40000 ALTER TABLE `vendor` DISABLE KEYS */;
INSERT INTO `vendor` VALUES (1,'Tushar S','ts@gmail.com','1010101010','At post Baramati','101',3),(2,'suraj','surajwabale71@gmail.com','546564','Khed','34764',2),(3,'Obj','surajwabale81@gmail.com','1111111111','At - Post Retwadi ,Tel - Khed Pune, Maharashtra, 410505 ','102300',3),(4,'SRKsk','Sk@gmail.com','12323232','pune','2035',4),(5,'uvbjhkj','bfdasjn@gmail.com','675687578','khdaf','32423',5),(7,'n','sdnj@gmail.com','4564524323','dfgdf','32975',8),(8,'Tejas Abhang','tejas12@gmail.com','909768457','Kadegaon','8986',9),(9,'sourabh','sourabh@gmail.com','480944','kolhapur','5678',10);
/*!40000 ALTER TABLE `vendor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendor_product`
--

DROP TABLE IF EXISTS `vendor_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vendor_product` (
  `vendor_v_id` int NOT NULL,
  `product_p_id` int NOT NULL,
  UNIQUE KEY `UK_iu2hlt33jlapy0l9w4lte0poh` (`product_p_id`),
  KEY `FKdmwl29nyhsmekdhpboxvj0uek` (`vendor_v_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendor_product`
--

LOCK TABLES `vendor_product` WRITE;
/*!40000 ALTER TABLE `vendor_product` DISABLE KEYS */;
/*!40000 ALTER TABLE `vendor_product` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-27 13:54:27

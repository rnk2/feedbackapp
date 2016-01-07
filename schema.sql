-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jan 07, 2016 at 06:41 AM
-- Server version: 5.1.53
-- PHP Version: 5.3.4

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `feedapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE IF NOT EXISTS `feedback` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `participant` varchar(25) NOT NULL,
  `ssid` varchar(10) NOT NULL,
  `pscore` int(2) DEFAULT NULL,
  `tscore` int(2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=15 ;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`id`, `participant`, `ssid`, `pscore`, `tscore`) VALUES
(1, 'raju', '85', 4, 5),
(2, 'raju@gmail.com', '87', 4, 5),
(3, 'address@address.com', '87', 3, 4),
(4, 'pbakku', '88', 3, 4),
(5, 'skokku', '88', 3, 5),
(6, 'sgunta', '88', 4, 5),
(7, 'saudam', '88', 2, 3),
(8, 'rpollishetti', '88', 3, 4),
(9, 'manoj', '88', 3, 4),
(10, 'ssangireddy', '88', 2, 4),
(11, 'venkatesh', '88', 3, 4),
(12, 'vanava', '88', 4, 5),
(14, 'Naresh', '60', 4, 5);

-- --------------------------------------------------------

--
-- Table structure for table `participants`
--

CREATE TABLE IF NOT EXISTS `participants` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `participant` varchar(20) NOT NULL,
  `email` varchar(25) NOT NULL,
  `ssid` int(5) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=116 ;

--
-- Dumping data for table `participants`
--

INSERT INTO `participants` (`id`, `participant`, `email`, `ssid`) VALUES
(54, 'shiva', 'shiva@123.com', 59),
(75, 'shiva', 'shiva@123.com', 59),
(77, 'shiva', 'shiva@123.com', 60),
(87, 'raj', 'raj@123.com', 79),
(88, 'raj', 'raj@123.com', 79),
(91, 'raj', 'raj@123.com', 60),
(97, 'raj', 'raj@123.com', 79),
(101, 'anil', 'address@address.com', 79),
(104, 'anil', 'address@address.com', 59),
(105, 'anil', 'address@address.com', 60),
(106, 'anil', 'address@address.com', 85),
(107, 'anil', 'address@address.com', 86),
(108, 'anil', 'address@address.com', 87),
(109, 'raj', 'raj@123.com', 88),
(110, 'raj', 'raj@123.com', 87),
(112, 'Shiva', 'shiva@123.com', 89),
(113, 'Shiva', 'shiva@123.com', 89),
(114, 'Naresh', 'naresh@123.com', 89),
(115, 'Naresh', 'naresh@123.com', 59);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE IF NOT EXISTS `roles` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `title`) VALUES
(1, 'user'),
(2, 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE IF NOT EXISTS `sessions` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `pid` varchar(15) DEFAULT NULL,
  `location` varchar(25) NOT NULL,
  `date` datetime DEFAULT NULL,
  `description` text NOT NULL,
  `status` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=90 ;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `name`, `pid`, `location`, `date`, `description`, `status`) VALUES
(59, 'Ram', 'ReactJS', '2nd-Floor', '2015-12-31 18:30:00', 'React is a JavaScript library for creating user interfaces by Facebook and Instagram. Many people choose to think of React as the V in MVC.', 1),
(60, 'Shiva', 'AngularJS', '4th-Floor', '2015-12-31 22:30:00', 'HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.', 1),
(79, 'sai', 'nodejs', '4th-floor', '2015-12-30 16:30:00', 'server-side scripting language', 1),
(81, 'raj', 'Jasmine', '2nd-Floor', '2015-12-31 18:30:00', 'Javascript testing', 1),
(85, 'anil', 'NodeJS', '4th-Floor', '2015-12-31 18:30:00', 'Sever-Side Javascript ', 1),
(86, 'anil', 'AngularJS', '2nd-Floor', '2015-12-31 20:30:00', 'AngularJS developed by Google', 1),
(87, 'Naresh', 'ExpressJS', '4th-Floor', '2016-01-08 16:30:00', 'Server Side Javascript Framework', 0),
(88, 'Naresh', 'PassportJS', '4th-Floor', '2016-01-08 20:30:00', 'Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application. A comprehensive set of strategies support authentication using a username and password, Facebook, Twitter, and more.', 0),
(89, 'Shiva', 'Jasmine Test Ca', '4th-Floor', '2016-01-15 16:30:00', 'test casess', 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(60) DEFAULT NULL,
  `roleid` varchar(12) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=29 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `email`, `password`, `roleid`) VALUES
(17, 'ramesh', 'polishetti', 'ram.polishetti@gmail.com', '$2a$10$s.D8VNhsEaC079eONiAEZOqAYLlVmGodHkLV6KnMG.KMrZD/zb/Pe', '1'),
(18, 'ramesh', 'polishetti', 'rpolishetti', '$2a$10$b3Jqao1BbprZS2RrIT6gueLi55/MgkiOCk273NLwr5LG1omOJKBni', '1'),
(19, 'naresh', 'kumar', 'nrenukuntla@nisum.com', '$2a$10$X3B0a8qZcfJMkpRV5o0BV.VkhHWakcSYrrzyaemnQI9Tv/fEu5hLW', '1'),
(20, 'ram', 'ram', 'ram@gmail.com', '$2a$10$EXmmQLWB.bTmNVYotj8NTu2GFFaq2C1hsbO7Po4aACiwuaWPOPE9C', '1'),
(21, 'anil', 'kumar', 'address@address.com', '$2a$10$dWlT7VpFOlPOWbLtKb3rLudK0sNXwgRX.mmSvwVHhyhZgYF1YhFIq', '1'),
(22, 'bakku', 'pavan', 'pavan@123.com', '$2a$10$2cqjlnT1XEwfTRiZYQQf4.ImAtC5JSA85U/I.DB4CnY9Fv5wrVM9a', '1'),
(23, 'kiran', 'kumar', 'kiran@123.com', '$2a$10$j/CYBM/DKaCLnasvLYgZEeoH6wZoFjxIX876f0J6VfZssDjvK4Ts2', '1'),
(24, 'ssss', 'sss', 'sss@gmail.com', '$2a$10$Io2hTDa0IC5UeOBVmz84duML8ErhoLY91g7VKavx/8O26/CPVJRBy', '1'),
(25, 'raj', 'kumar', 'raj@123.com', '$2a$10$8yyDgsnWuLud2jHQaIDlIeIcbI2uCKKDWyUjELwxog7kXdL/I6HrG', '1'),
(27, 'Naresh', 'Kumar', 'naresh@123.com', '$2a$10$xuYiRpjSFTB.2udUEbwqjuXscRJU8tN4rEtoe7shjlQA.UVfg2MQy', '1'),
(28, 'Shiva', 'Audam', 'shiva@123.com', '$2a$10$E8/2.WO.Xa1pGXlY8qnd/.R4slJigea7BK1CBcL8ZxUfiLNvWp1vG', '1');

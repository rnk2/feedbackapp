-- phpMyAdmin SQL Dump
-- version 4.1.12
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jan 07, 2016 at 03:55 PM
-- Server version: 5.5.36
-- PHP Version: 5.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


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
  `participantId` int(10) NOT NULL,
  `sessionId` int(10) NOT NULL,
  `pScore` int(2) DEFAULT NULL,
  `tScore` int(2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=15 ;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`id`, `participantId`, `sessionId`, `pScore`, `tScore`) VALUES
(1, 0, 85, 4, 5),
(2, 0, 87, 4, 5),
(3, 0, 87, 3, 4),
(4, 0, 88, 3, 4),
(5, 0, 88, 3, 5),
(6, 0, 88, 4, 5),
(7, 0, 88, 2, 3),
(8, 0, 88, 3, 4),
(9, 0, 88, 3, 4),
(10, 0, 88, 2, 4),
(11, 0, 88, 3, 4),
(12, 0, 88, 4, 5),
(14, 0, 60, 4, 5);

-- --------------------------------------------------------

--
-- Table structure for table `locations`
--

CREATE TABLE IF NOT EXISTS `locations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `locations`
--

INSERT INTO `locations` (`id`, `title`, `status`) VALUES
(1, 'gr-meeting-room', 1),
(2, 'level4-meeting-room', 1);

-- --------------------------------------------------------

--
-- Table structure for table `participants`
--

CREATE TABLE IF NOT EXISTS `participants` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `userId` int(10) NOT NULL,
  `sessionId` int(5) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=116 ;

--
-- Dumping data for table `participants`
--

INSERT INTO `participants` (`id`, `userId`, `sessionId`, `status`) VALUES
(54, 0, 59, 1),
(75, 0, 59, 1),
(77, 0, 60, 1),
(87, 0, 79, 1),
(88, 0, 79, 1),
(91, 0, 60, 1),
(97, 0, 79, 1),
(101, 0, 79, 1),
(104, 0, 59, 1),
(105, 0, 60, 1),
(106, 0, 85, 1),
(107, 0, 86, 1),
(108, 0, 87, 1),
(109, 0, 88, 1),
(110, 0, 87, 1),
(112, 0, 89, 1),
(113, 0, 89, 1),
(114, 0, 89, 1),
(115, 0, 59, 1);

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
  `title` varchar(30) NOT NULL,
  `presenterId` int(15) DEFAULT NULL,
  `locationId` int(11) NOT NULL,
  `date` datetime DEFAULT NULL,
  `description` text NOT NULL,
  `status` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=99 ;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `title`, `presenterId`, `locationId`, `date`, `description`, `status`) VALUES
(59, 'Ram', 0, 2, '2015-12-31 18:30:00', 'React is a JavaScript library for creating user interfaces by Facebook and Instagram. Many people choose to think of React as the V in MVC.', 1),
(60, 'Shiva', 0, 4, '2015-12-31 22:30:00', 'HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.', 1),
(79, 'sai', 0, 4, '2015-12-30 16:30:00', 'server-side scripting language', 1),
(81, 'raj', 0, 2, '2015-12-31 18:30:00', 'Javascript testing', 1),
(85, 'anil', 0, 4, '2015-12-31 18:30:00', 'Sever-Side Javascript ', 1),
(86, 'anil', 0, 2, '2015-12-31 20:30:00', 'AngularJS developed by Google', 1),
(87, 'Naresh', 0, 4, '2016-01-08 16:30:00', 'Server Side Javascript Framework', 0),
(88, 'Naresh', 0, 4, '2016-01-08 20:30:00', 'Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application. A comprehensive set of strategies support authentication using a username and password, Facebook, Twitter, and more.', 0),
(89, 'Shiva', 0, 4, '2016-01-15 16:30:00', 'test casess', 0),
(90, 'sdasd', 31, 3, '0000-00-00 00:00:00', '2016-01-20 13:45', 0),
(91, 'sess1', 31, 3, '2016-01-12 13:45:00', 'asdasd', 0),
(92, 'sdfdsf', 31, 5, '2016-01-11 12:40:00', 'sdfsdf', 0),
(93, 'rdsfdsk', 31, 2, '2016-01-13 19:45:00', 'vxv', 0),
(94, 'rdsfdsk', 31, 2, '2016-01-13 19:45:00', 'vxv', 0),
(95, 'sdjfh', 31, 3, '1899-12-27 18:50:00', 'dfsdf', 1),
(96, 'sdasd', 31, 3, '2016-01-05 13:45:00', 'dfsdf', 1),
(97, 'session', 31, 1, '2016-01-03 08:40:00', 'sdfsdf', 0),
(98, 'asdad', 31, 2, '2016-01-12 20:45:00', 'dsfsdf', 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(60) DEFAULT NULL,
  `roleId` varchar(12) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=32 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `password`, `roleId`) VALUES
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
(28, 'Shiva', 'Audam', 'shiva@123.com', '$2a$10$E8/2.WO.Xa1pGXlY8qnd/.R4slJigea7BK1CBcL8ZxUfiLNvWp1vG', '1'),
(29, 'ramesh', 'p', 'ramesh@gmail.com', '$2a$10$IkNkC/7ltYMiD2AWJtQA2.fypj9zkpdLYLJIkRgw3TDK6wqOA6ZPm', '1'),
(30, 'ram', 'p', 'test@mail.com', '$2a$10$oqvXKHHjqVklzSISBVkOgeM0W6gk3DRtYdF6nUmLyFbOQu9Xc3I2e', '1'),
(31, 'ram', 'p', 'hello@gmail.com', '$2a$10$ycmcZlOoc4PzmfjaWUqbsOGbdQZyzpScRsHT7D08zljfECbIiPWgK', '1');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

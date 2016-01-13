-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jan 13, 2016 at 03:48 AM
-- Server version: 10.1.9-MariaDB
-- PHP Version: 5.5.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `feedapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `id` int(10) NOT NULL,
  `participantId` int(10) NOT NULL,
  `sessionId` int(10) NOT NULL,
  `pScore` int(2) DEFAULT NULL,
  `tScore` int(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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

CREATE TABLE `locations` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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

CREATE TABLE `participants` (
  `id` int(10) NOT NULL,
  `userId` int(10) NOT NULL,
  `sessionId` int(5) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `participants`
--

INSERT INTO `participants` (`id`, `userId`, `sessionId`, `status`) VALUES
(54, 17, 101, 1),
(75, 18, 101, 1),
(77, 19, 60, 1),
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

CREATE TABLE `roles` (
  `id` int(10) NOT NULL,
  `title` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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

CREATE TABLE `sessions` (
  `id` int(10) NOT NULL,
  `title` varchar(30) NOT NULL,
  `presenterId` int(15) DEFAULT NULL,
  `locationId` int(11) NOT NULL,
  `date` datetime DEFAULT NULL,
  `description` text NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `title`, `presenterId`, `locationId`, `date`, `description`, `status`) VALUES
(99, 'Backbone', 17, 1, '2016-01-04 09:25:00', 'Backbone', 1),
(100, 'require', 17, 2, '2016-02-01 15:40:00', '2223', 1),
(101, 'require', 17, 1, '2015-12-29 05:45:00', '123456789', 1),
(102, 'jil', 17, 2, '2016-02-01 16:39:00', 'sfll', 1),
(103, 'akl', 17, 1, '2016-01-25 16:41:00', '5666', 1),
(104, 'sdasd', 17, 2, '2016-02-01 16:45:00', '456', 1),
(105, 'sdd', 17, 1, '2016-01-25 16:41:00', 'asd', 1);

-- --------------------------------------------------------

--
-- Table structure for table `sessions_status`
--

CREATE TABLE `sessions_status` (
  `id` int(11) NOT NULL,
  `name` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sessions_status`
--

INSERT INTO `sessions_status` (`id`, `name`) VALUES
(1, 'open'),
(2, 'closed'),
(3, 'archived');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) NOT NULL,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(60) DEFAULT NULL,
  `roleId` varchar(12) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `password`, `roleId`) VALUES
(17, 'ramesh', 'polishetti', 'ram.polishetti@gmail.com', '$2a$10$ycmcZlOoc4PzmfjaWUqbsOGbdQZyzpScRsHT7D08zljfECbIiPWgK', '1'),
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

--
-- Indexes for dumped tables
--

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `locations`
--
ALTER TABLE `locations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `participants`
--
ALTER TABLE `participants`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sessions_status`
--
ALTER TABLE `sessions_status`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `locations`
--
ALTER TABLE `locations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `participants`
--
ALTER TABLE `participants`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=116;
--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `sessions`
--
ALTER TABLE `sessions`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=106;
--
-- AUTO_INCREMENT for table `sessions_status`
--
ALTER TABLE `sessions_status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 09, 2024 at 06:33 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tree_database`
--

-- --------------------------------------------------------

--
-- Table structure for table `trees`
--

CREATE TABLE `trees` (
 `id` mediumint(8) UNSIGNED NOT NULL,
 `name` varchar(255) DEFAULT NULL,
 `age` mediumint(9) DEFAULT NULL,
 `email` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `trees`
--

INSERT INTO `trees` (`id`, `name`, `age`, `email`) VALUES
(1, 'ไฮเดรนเยีย', 5, 'Hydrangea@treemail.com'),
(2, 'โรสแมรี่', 12, 'Rosmari@treemail.com'),
(3, 'หูกระจง', 20, 'Terminalia@treemail.com'),
(4, 'ฟิโลเดนดรอน', 7, 'Philodendron@treemail.com'),
(5, 'ตะเคียน', 50,'Takien@treemail.com'),
(6, 'ตะเคียนตกน้ำมัน', 200, 'Hauntedtakien@treemail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `trees`
--
ALTER TABLE `trees`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `trees`
--
ALTER TABLE `trees`
 MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
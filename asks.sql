-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 05-Nov-2022 às 10:44
-- Versão do servidor: 5.7.36
-- versão do PHP: 8.1.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `guiaperguntas`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `asks`
--

DROP TABLE IF EXISTS `asks`;
CREATE TABLE IF NOT EXISTS `asks` (
  `ask_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`ask_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `asks`
--

INSERT INTO `asks` (`ask_id`, `title`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 'Como usar o node', 'está sendo top', '2022-11-05 00:07:35', '2022-11-05 00:07:35'),
(2, 'O que é Lorem Ipsum?', 'aaa', '2022-11-05 10:27:30', '2022-11-05 10:27:30'),
(3, 'Porque usamos isso?', 'aaa', '2022-11-05 10:27:54', '2022-11-05 10:27:54'),
(4, 'De onde isso vem?', 'aaaa', '2022-11-05 10:28:18', '2022-11-05 10:28:18'),
(5, 'Onde posso arranjar algum?', 'aaa', '2022-11-05 10:28:42', '2022-11-05 10:28:42');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

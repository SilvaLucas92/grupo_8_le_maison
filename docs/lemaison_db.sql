-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-02-2022 a las 01:13:39
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `lemaison_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cart`
--

CREATE TABLE `cart` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Mesas', NULL, NULL),
(2, 'Escritorios', NULL, NULL),
(3, 'Sillas', NULL, NULL),
(4, 'Sillones', NULL, NULL),
(5, 'Estanterias', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `colors`
--

CREATE TABLE `colors` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `colors`
--

INSERT INTO `colors` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Marron', NULL, NULL),
(2, 'Gris', NULL, NULL),
(3, 'Blanco', NULL, NULL),
(4, 'Negro', NULL, NULL),
(5, 'Rosado', NULL, NULL),
(6, 'Natural', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materials`
--

CREATE TABLE `materials` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `materials`
--

INSERT INTO `materials` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Madera', NULL, NULL),
(2, 'Plastico', NULL, NULL),
(3, 'Tela', NULL, NULL),
(4, 'Vidrio', NULL, NULL),
(5, 'Hierro', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pdt_cart`
--

CREATE TABLE `pdt_cart` (
  `id` int(10) UNSIGNED NOT NULL,
  `pdt_id` int(10) UNSIGNED NOT NULL,
  `cart_id` int(10) UNSIGNED NOT NULL,
  `pdt_price` decimal(8,2) DEFAULT NULL,
  `quantity` int(10) UNSIGNED DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pdt_colors`
--

CREATE TABLE `pdt_colors` (
  `id` int(10) UNSIGNED NOT NULL,
  `pdt_id` int(10) UNSIGNED NOT NULL,
  `colors_id` int(10) UNSIGNED NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `pdt_colors`
--

INSERT INTO `pdt_colors` (`id`, `pdt_id`, `colors_id`, `createdAt`, `updatedAt`) VALUES
(4, 34, 4, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pdt_materials`
--

CREATE TABLE `pdt_materials` (
  `id` int(10) UNSIGNED NOT NULL,
  `pdt_id` int(10) UNSIGNED NOT NULL,
  `materials_id` int(10) UNSIGNED NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `pdt_materials`
--

INSERT INTO `pdt_materials` (`id`, `pdt_id`, `materials_id`, `createdAt`, `updatedAt`) VALUES
(5, 34, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `price` decimal(8,2) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `cat_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `image`, `price`, `createdAt`, `updatedAt`, `cat_id`) VALUES
(19, 'Escritorio Combinado Infantil', 'Pupitre kids. Construido en melamina blanco y roble de 18 mm de espesor. El armado requiere de un destornillador y las patas se ensamblan a rosca. Incluye 2 vasos plasticos de distinto color para poder apoyar lápices o marcadores.', 'img-1645303203609.jpg', '17900.00', '2022-02-19 20:40:03', '2022-02-19 20:40:03', 2),
(20, 'Biblioteca Nayra', 'Biblioteca Línea Nayra. Estilo Nórdico.', 'img-1645303318079.jpg', '54990.00', '2022-02-19 20:41:58', '2022-02-19 20:41:58', 5),
(21, 'Mesa Tom Baja Blanca', 'Mesa ratona romeo rectangular blanca. Construida en melamina blanca de 18mm de espesor con los cantos invertidos a 45º grados.', 'img-1645303413397.jpg', '13890.00', '2022-02-19 20:43:33', '2022-02-19 20:43:33', 1),
(22, 'Mesa Rectangular Natural 160 Cm', 'Mesa rectangular de MDF de color natural.', 'img-1645303516752.jpg', '73990.00', '2022-02-19 20:45:16', '2022-02-19 20:45:16', 1),
(23, 'Silla Barcelona Gris Oscuro', 'Silla con respaldo y asiento tapizada en tela tipo pana con patas cromadas.', 'img-1645303626772.jpg', '25990.00', '2022-02-19 20:47:06', '2022-02-19 20:47:06', 3),
(24, 'Sofa 3 Cuerpos Nikel Escandinavo Sunny', 'Sofa de 3 cuerpo, Placa Soft de alta densidad. Patas de madera maciza.', 'img-1645303747523.jpg', '69890.00', '2022-02-19 20:49:07', '2022-02-19 20:49:07', 4),
(26, 'Sillon 1 Cuerpo Azul Chanel Sunny', 'Sillon de 1 cuerpo, Placa Soft de alta densidad. Patas de madera maciza.', 'img-1645303803821.jpg', '36890.00', '2022-02-19 20:50:03', '2022-02-19 20:50:03', 4),
(27, 'Mesa Ratona', 'Mesa de vidrio', 'img-1645385792943.jpg', '45000.00', '2022-02-19 20:51:40', '2022-02-20 19:44:37', 5),
(28, 'Mueble Alto Fiji', 'Mueble Línea Fiji, fabricado en madera clara, patas plasticas con laca UV, 4 puertas blancas con apertura push, 2 estantes, bisagras metálicas, sistema Minifix. ', 'img-1645304051990.jpg', '48000.00', '2022-02-19 20:54:11', '2022-02-19 20:54:11', 5),
(34, 'Escritorio', 'Escritorio Judith', 'img-1645479707251.jpg', '6380.00', '2022-02-21 21:41:47', '2022-02-21 21:41:47', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `colors`
--
ALTER TABLE `colors`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `materials`
--
ALTER TABLE `materials`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pdt_cart`
--
ALTER TABLE `pdt_cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pdt_id` (`pdt_id`),
  ADD KEY `cart_id` (`cart_id`);

--
-- Indices de la tabla `pdt_colors`
--
ALTER TABLE `pdt_colors`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pdt_id` (`pdt_id`),
  ADD KEY `colors_id` (`colors_id`);

--
-- Indices de la tabla `pdt_materials`
--
ALTER TABLE `pdt_materials`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pdt_id` (`pdt_id`),
  ADD KEY `materials_id` (`materials_id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cat_id` (`cat_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `colors`
--
ALTER TABLE `colors`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `materials`
--
ALTER TABLE `materials`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `pdt_cart`
--
ALTER TABLE `pdt_cart`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pdt_colors`
--
ALTER TABLE `pdt_colors`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `pdt_materials`
--
ALTER TABLE `pdt_materials`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `pdt_cart`
--
ALTER TABLE `pdt_cart`
  ADD CONSTRAINT `pdt_cart_ibfk_1` FOREIGN KEY (`pdt_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `pdt_cart_ibfk_2` FOREIGN KEY (`cart_id`) REFERENCES `cart` (`id`);

--
-- Filtros para la tabla `pdt_colors`
--
ALTER TABLE `pdt_colors`
  ADD CONSTRAINT `pdt_colors_ibfk_1` FOREIGN KEY (`pdt_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `pdt_colors_ibfk_2` FOREIGN KEY (`colors_id`) REFERENCES `colors` (`id`);

--
-- Filtros para la tabla `pdt_materials`
--
ALTER TABLE `pdt_materials`
  ADD CONSTRAINT `pdt_materials_ibfk_1` FOREIGN KEY (`pdt_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `pdt_materials_ibfk_2` FOREIGN KEY (`materials_id`) REFERENCES `materials` (`id`);

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`cat_id`) REFERENCES `categories` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

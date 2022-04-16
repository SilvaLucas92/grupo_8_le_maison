-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-04-2022 a las 16:25:54
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
(7, 26, 2, NULL, NULL),
(8, 20, 1, NULL, NULL),
(27, 21, 1, NULL, NULL),
(29, 28, 3, NULL, NULL),
(32, 45, 1, NULL, NULL),
(33, 46, 2, NULL, NULL),
(34, 47, 3, NULL, NULL),
(35, 48, 1, NULL, NULL),
(36, 49, 4, NULL, NULL),
(37, 50, 4, NULL, NULL),
(38, 51, 2, NULL, NULL),
(39, 52, 4, NULL, NULL),
(40, 53, 4, NULL, NULL);

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
(8, 26, 1, NULL, NULL),
(9, 20, 1, NULL, NULL),
(27, 21, 1, NULL, NULL),
(29, 28, 1, NULL, NULL),
(32, 45, 1, NULL, NULL),
(33, 46, 2, NULL, NULL),
(34, 47, 1, NULL, NULL),
(35, 48, 1, NULL, NULL),
(36, 49, 3, NULL, NULL),
(37, 50, 3, NULL, NULL),
(38, 51, 3, NULL, NULL),
(39, 52, 3, NULL, NULL),
(40, 53, 3, NULL, NULL);

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
(19, '   Escritorio Combinado Infantil', '   Pupitre kids. Construido en melamina blanco y roble de 18 mm de espesor. El armado requiere de un destornillador y las patas se ensamblan a rosca. Incluye 2 vasos plasticos de distinto color para poder apoyar lápices o marcadores.   ', 'img-1645303203609.jpg', '17900.00', '2022-02-19 20:40:03', '2022-03-01 22:01:45', 2),
(20, '       Biblioteca Nayra', '       Biblioteca Línea Nayra. Estilo Nórdico.   ', 'img-1645303318079.jpg', '54990.00', '2022-02-19 20:41:58', '2022-03-01 23:28:51', 5),
(21, ' Mesa Tom Baja Blanca', ' Mesa ratona romeo rectangular blanca. Construida en melamina blanca de 18mm de espesor con los cantos invertidos a 45º grados. ', 'img-1645303413397.jpg', '13890.00', '2022-02-19 20:43:33', '2022-03-21 21:41:11', 1),
(22, 'Mesa Rectangular Natural 160 Cm', 'Mesa rectangular de MDF de color natural.', 'img-1645303516752.jpg', '73990.00', '2022-02-19 20:45:16', '2022-02-19 20:45:16', 1),
(23, '     Silla Barcelona Gris Oscuro', '     Silla con respaldo y asiento tapizada en tela tipo pana con patas cromadas.     ', 'img-1645303626772.jpg', '25990.00', '2022-02-19 20:47:06', '2022-03-01 22:20:36', 4),
(24, 'Sofa 3 Cuerpos Nikel Escandinavo Sunny', 'Sofa de 3 cuerpo, Placa Soft de alta densidad. Patas de madera maciza.', 'img-1645303747523.jpg', '69890.00', '2022-02-19 20:49:07', '2022-02-19 20:49:07', 4),
(26, '    Sillon 1 Cuerpo Azul Chanel Sunny', '    Sillon de 1 cuerpo, Placa Soft de alta densidad. Patas de madera maciza.    ', 'img-1645303803821.jpg', '36890.00', '2022-02-19 20:50:03', '2022-03-03 02:40:01', 2),
(28, '', '  Mueble Línea Fiji, fabricado en madera clara, patas plasticas con laca UV, 4 puertas blancas con apertura push, 2 estantes, bisagras metálicas, sistema Minifix.   ', 'img-1645304051990.jpg', '48000.00', '2022-02-19 20:54:11', '2022-03-31 20:28:41', 5),
(45, 'Mesa Escritorio Arrime', 'Mesa arrime, construida en melamina de 18 mm de espesor. Posee los cantos invertidos a 45° en la tapa del escritorio. Tapa blanca, base roble, ideal para trabajar desde el sillón o la cama con la notebook.  Se entrega desarmado y se arma con llave allen l', 'img-1649853067829.jpg', '8991.00', '2022-04-13 12:31:07', '2022-04-13 12:31:07', 1),
(46, 'Escritorio Noa', 'Escritorio Milo. Construido en multilaminado de 18 mm de espesor + melamina blanca de 18 mm con los cantos pegados en igual tono. Se entrega desarmado y se arma con llave allen la cual viene incluida con el producto.', 'img-1649853261182.jpg', '12000.00', '2022-04-13 12:34:21', '2022-04-13 12:34:21', 2),
(47, 'Escritorio Otto Combinado', 'Escritorio de madera paraíso, lustre semi mate. Contiene dos cajones.', 'img-1649853338138.jpg', '38944.00', '2022-04-13 12:35:38', '2022-04-13 12:35:38', 2),
(48, 'Biblioteca Stairs', 'Bilioteca Alta. Construida en melamina blanca y roble de 18mm de espesor. Se arma por encastre y con destornillador.', 'img-1649853413677.jpg', '44000.00', '2022-04-13 12:36:53', '2022-04-13 12:36:53', 5),
(49, 'Sofa Cama Black Estocolmo', 'Sofa cama estocolmo negro de 2,2 mts, Placa Soft de alta densidad. Medidas: 220 ancho x 95 prof x 74 altura.', 'img-1649853600852.jpg', '120000.00', '2022-04-13 12:40:00', '2022-04-13 12:40:00', 3),
(50, 'Sofá Confort Gris Oscuro 2 Cuerpos', 'Sillón de 2 cuerpos estilo escandinavo en tela de lino. Almohadones de Placa Soft de alta densidad. Patas de madera maciza. ', 'img-1649853790133.jpg', '108000.00', '2022-04-13 12:43:10', '2022-04-13 12:43:10', 3),
(51, 'Sofá Luxury Gris Claro 3 Cuerpos', 'Sillón de 3 cuerpos estilo escandinavo en tela de lino. Almohadones de Placa Soft de alta densidad. Patas de madera maciza.', 'img-1649853858694.jpg', '130000.00', '2022-04-13 12:44:18', '2022-04-13 12:44:18', 4),
(52, 'Sillon 1 Cuerpo Azul Chanel Sunny', 'Sillon de 1 cuerpo, Placa Soft de alta densidad. Patas de madera maciza.', 'img-1649853967754.jpg', '120000.00', '2022-04-13 12:46:07', '2022-04-13 12:46:07', 4),
(53, 'Sillón Negro New Tulip', 'Sillon gris de PVC con patas en madera.', 'img-1649854150917.jpg', '15000.00', '2022-04-13 12:49:10', '2022-04-13 12:49:10', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `password`, `createdAt`, `updatedAt`, `email`, `image`) VALUES
(1, 'Lucas Silva', '$2a$10$iyqG9rr53ZZ6OLakw/747OimxhbM7v0/0t8UH5ZVJ1O7VTfJdbPXq', NULL, NULL, 'lucassilva@gmail.com', ''),
(2, 'Lucas Silva', '$2a$10$bmTtBPoupymCnv.BJDZ.MuSHeAdJkQ1n0Ge6zPSF2UoK6DZkPOiWG', NULL, NULL, 'lu@gmail.com', ''),
(3, 'candela palomba', '$2a$10$tT2n1ZSuK0WQIN3FlRxk5enB6WNlDVcyTY2lhvEnJSTjDpEgjDFrG', NULL, NULL, 'cande@gmail.com', ''),
(4, 'cesto', '$2a$10$gc9OnPL.sxdkggrdHTsNQuiOq4zH8zju5.2SCD7mk3q4Z3xNRt6G6', NULL, NULL, 'cesto@gmail.com', ''),
(5, 'lucas', '$2a$10$zWT7UJDMJduFipy0nuM/aujK0rVTHp1fuPK98.zpOUa2zpzPKSbLq', NULL, NULL, 'l@gmail.com', ''),
(6, 'lucas', '$2a$10$ksbbU4gIzNYgOGqh8VcbTeKQFcj4b/ajE751F1zxBxQEuW5g1c84G', NULL, NULL, 'li@gmail.com', ''),
(7, 'Lucas Silva', '$2a$10$XwIzDTljsEJ8..InWQiT1.HFJbeig9eByG1pFgPViP0mX4aMqg2f.', NULL, NULL, 'carla@gmail.com', ''),
(8, 'candela palomba', '$2a$10$g2GfxxPt8JdUnDKI2nJK7eNaJkAQl/jz4aBYkd0EHvOgO7RXO8F6O', NULL, NULL, 'cand1e@gmail.com', ''),
(9, 'candela palomba', '$2a$10$KOAugF6y2PUmyLXU20biJu2j.JgDiMl1Zb6i.nJh6FKjYQyWUFA3O', NULL, NULL, 'can@gmail.com', ''),
(10, 'lucas silva', '$2a$10$H2pn/rYD5ZS1t9rcrTnzHOkBtRlGZof6/ye66BO.Pzqp4dUruV1VC', NULL, NULL, 'l.@gmail.com', ''),
(11, 'cesto', '$2a$10$coPBxhDO6U1UaZNHW01BL.Un/B7w2iRC0gya8snbaWivWG234Pj9G', NULL, NULL, 'kk@gmail.com', ''),
(12, 'lucas', '$2a$10$rMCG46628fAYQYfa/akgAeuFlaTnSKRV21KCbdZJD13K5f3nwcEWS', NULL, NULL, 'll@gmail.com', ''),
(13, 'Marcos Silva', '$2a$10$hdowZ2ZzxiXMIPoGa6St5eRlKQogvZOLNLerjkjLvnU15do43v.86', NULL, NULL, 'marcos@gmail.com', ''),
(14, 'carlos', '$2a$10$O5qQg3KAFA0p3ojCfiNcb.Lz48bGjZev34cmnxkEXwd45YgrGAWnC', NULL, NULL, 'carlossilva@gmail.com', 'img-1649898870171.jpg'),
(15, 'carlos herrera', '$2a$10$JDvpdy5QbV/v.mUtAsU3deAt3zF6AQhxOj8Yg4A85ww/fizJ/GTqy', NULL, NULL, 'carlosherrera@gmail.com', 'img-1649898907033.jpg');

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
  ADD PRIMARY KEY (`id`);

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
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT de la tabla `pdt_materials`
--
ALTER TABLE `pdt_materials`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

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

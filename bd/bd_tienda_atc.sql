-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.18-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para dwec_tiendajunio_atc
DROP DATABASE IF EXISTS `dwec_tiendajunio_atc`;
CREATE DATABASE IF NOT EXISTS `dwec_tiendajunio_atc` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `dwec_tiendajunio_atc`;

-- Volcando estructura para tabla dwec_tiendajunio_atc.administrador
DROP TABLE IF EXISTS `administrador`;
CREATE TABLE IF NOT EXISTS `administrador` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dni` varchar(50) DEFAULT NULL,
  `pass` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `dni` (`dni`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla dwec_tiendajunio_atc.administrador: ~0 rows (aproximadamente)
DELETE FROM `administrador`;
/*!40000 ALTER TABLE `administrador` DISABLE KEYS */;
/*!40000 ALTER TABLE `administrador` ENABLE KEYS */;

-- Volcando estructura para tabla dwec_tiendajunio_atc.categoria
DROP TABLE IF EXISTS `categoria`;
CREATE TABLE IF NOT EXISTS `categoria` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla dwec_tiendajunio_atc.categoria: ~13 rows (aproximadamente)
DELETE FROM `categoria`;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` (`id`, `nombre`) VALUES
	(1, 'Shooter'),
	(2, 'Aventura Gráfica'),
	(3, 'Lucha'),
	(4, 'Puzzle'),
	(5, 'Acción'),
	(6, 'Deportes'),
	(7, 'Multijugador Online'),
	(8, 'Simulación'),
	(9, 'Estrategia'),
	(10, 'Musical'),
	(11, 'Plataformas'),
	(12, 'Rol'),
	(13, 'Velocidad');
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;

-- Volcando estructura para tabla dwec_tiendajunio_atc.cliente
DROP TABLE IF EXISTS `cliente`;
CREATE TABLE IF NOT EXISTS `cliente` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `correo` varchar(50) DEFAULT NULL,
  `dni` varchar(50) DEFAULT NULL,
  `clave` varchar(50) NOT NULL DEFAULT 'Algo',
  `direccion1` int(11) DEFAULT NULL,
  `direccion2` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `dni` (`dni`),
  KEY `FK_cliente_direccion1` (`direccion1`),
  KEY `FK_cliente_direccion2` (`direccion2`),
  CONSTRAINT `FK_cliente_direccion1` FOREIGN KEY (`direccion1`) REFERENCES `direccion1` (`id`),
  CONSTRAINT `FK_cliente_direccion2` FOREIGN KEY (`direccion2`) REFERENCES `direccion2` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla dwec_tiendajunio_atc.cliente: ~3 rows (aproximadamente)
DELETE FROM `cliente`;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;

-- Volcando estructura para tabla dwec_tiendajunio_atc.compra
DROP TABLE IF EXISTS `compra`;
CREATE TABLE IF NOT EXISTS `compra` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `precioTotal` int(11) DEFAULT NULL,
  `usuario` int(11) DEFAULT NULL,
  `envio` enum('Domicilio','Tienda') DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_compra_cliente` (`usuario`),
  CONSTRAINT `FK_compra_cliente` FOREIGN KEY (`usuario`) REFERENCES `cliente` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla dwec_tiendajunio_atc.compra: ~0 rows (aproximadamente)
DELETE FROM `compra`;
/*!40000 ALTER TABLE `compra` DISABLE KEYS */;
/*!40000 ALTER TABLE `compra` ENABLE KEYS */;

-- Volcando estructura para tabla dwec_tiendajunio_atc.compra_producto
DROP TABLE IF EXISTS `compra_producto`;
CREATE TABLE IF NOT EXISTS `compra_producto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idCompra` int(11) DEFAULT NULL,
  `idProducto` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_compra_producto_compra` (`idCompra`),
  KEY `FK_compra_producto_producto` (`idProducto`),
  CONSTRAINT `FK_compra_producto_compra` FOREIGN KEY (`idCompra`) REFERENCES `compra` (`id`),
  CONSTRAINT `FK_compra_producto_producto` FOREIGN KEY (`idProducto`) REFERENCES `producto` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla dwec_tiendajunio_atc.compra_producto: ~0 rows (aproximadamente)
DELETE FROM `compra_producto`;
/*!40000 ALTER TABLE `compra_producto` DISABLE KEYS */;
/*!40000 ALTER TABLE `compra_producto` ENABLE KEYS */;

-- Volcando estructura para tabla dwec_tiendajunio_atc.direccion1
DROP TABLE IF EXISTS `direccion1`;
CREATE TABLE IF NOT EXISTS `direccion1` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ciudad` varchar(50) DEFAULT NULL,
  `calle` varchar(50) DEFAULT NULL,
  `codigoPost` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla dwec_tiendajunio_atc.direccion1: ~4 rows (aproximadamente)
DELETE FROM `direccion1`;
/*!40000 ALTER TABLE `direccion1` DISABLE KEYS */;
/*!40000 ALTER TABLE `direccion1` ENABLE KEYS */;

-- Volcando estructura para tabla dwec_tiendajunio_atc.direccion2
DROP TABLE IF EXISTS `direccion2`;
CREATE TABLE IF NOT EXISTS `direccion2` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ciudad` varchar(50) DEFAULT NULL,
  `calle` varchar(50) DEFAULT NULL,
  `codigoPost` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla dwec_tiendajunio_atc.direccion2: ~0 rows (aproximadamente)
DELETE FROM `direccion2`;
/*!40000 ALTER TABLE `direccion2` DISABLE KEYS */;
/*!40000 ALTER TABLE `direccion2` ENABLE KEYS */;

-- Volcando estructura para tabla dwec_tiendajunio_atc.ofertas
DROP TABLE IF EXISTS `ofertas`;
CREATE TABLE IF NOT EXISTS `ofertas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `producto` int(11) DEFAULT NULL,
  `descuento` int(11) DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `FK_ofertas_producto` (`producto`),
  CONSTRAINT `FK_ofertas_producto` FOREIGN KEY (`producto`) REFERENCES `producto` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla dwec_tiendajunio_atc.ofertas: ~9 rows (aproximadamente)
DELETE FROM `ofertas`;
/*!40000 ALTER TABLE `ofertas` DISABLE KEYS */;
INSERT INTO `ofertas` (`id`, `producto`, `descuento`) VALUES
	(1, 1, 10),
	(2, 2, 20),
	(3, 3, 5),
	(4, 4, 30),
	(5, 5, 70),
	(6, 6, 15),
	(7, 7, 45),
	(8, 8, 5),
	(9, 9, 10),
	(10, 10, 20),
	(11, 11, 40);
/*!40000 ALTER TABLE `ofertas` ENABLE KEYS */;

-- Volcando estructura para tabla dwec_tiendajunio_atc.producto
DROP TABLE IF EXISTS `producto`;
CREATE TABLE IF NOT EXISTS `producto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `subcategoria` int(11) DEFAULT NULL,
  `existencias` int(11) DEFAULT 0,
  `precio` int(11) NOT NULL DEFAULT 0,
  `imagen` varchar(50) DEFAULT 'img/imagen.jpg',
  `descripcion` varchar(500) DEFAULT 'No hay descripcion disponible.',
  `puntuacion` int(11) NOT NULL DEFAULT 0,
  `usuarios_puntuado` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `FK_producto_subcategoria` (`subcategoria`),
  CONSTRAINT `FK_producto_subcategoria` FOREIGN KEY (`subcategoria`) REFERENCES `subcategoria` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla dwec_tiendajunio_atc.producto: ~11 rows (aproximadamente)
DELETE FROM `producto`;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
INSERT INTO `producto` (`id`, `nombre`, `subcategoria`, `existencias`, `precio`, `imagen`, `descripcion`, `puntuacion`, `usuarios_puntuado`) VALUES
	(1, 'warframe', 1, 1, 60, 'img/warframe.jpg', 'Uno de los juegos de acción para PC de los llamado \'free-to-play\' que mejor recibimiento ha tenido en los últimos tiempos nos pone en la piel de unos ciberninjas espaciales que tendrán que cooperar para acabar con las extrañas criaturas que amenazan su planeta. Armas de fuego, katanas y superpoderes se dan la mano en este título que guarda horas de diversión, y que apuesta por un equilibrado modelo gratuito en el que la mayoría elementos de pago son mejoras estéticas.', 0, 0),
	(2, 'Escape from Tarkov', 1, 1, 50, 'img/tarkov.jpeg', 'No hay descripcion disponible.', 0, 0),
	(3, 'Payday 1', 1, 1, 50, 'img/payday1.jpg', 'No hay descripcion disponible.', 0, 0),
	(4, 'Payday 2', 1, 1, 50, 'img/payday2.jpeg', 'No hay descripcion disponible.', 0, 0),
	(5, 'Payday 3', 1, 1, 50, 'img/payday3.jpg', 'No hay descripcion disponible.', 0, 0),
	(6, 'Battlefield 5', 1, 1, 50, 'img/battlefield5.png', 'No hay descripcion disponible.', 0, 0),
	(7, 'Halo Infinite', 2, 1, 70, 'img/HaloInfinite.jpg', 'No hay descripcion disponible.', 0, 0),
	(8, 'Scorn', 2, 1, 20, 'img/scorn.jpg', 'No hay descripcion disponible.', 0, 0),
	(9, 'Stalker 1', 2, 1, 10, 'img/stalker1.jpg', 'No hay descripcion disponible.', 0, 0),
	(10, 'Stalker 2', 2, 1, 20, 'img/stalker2.jpg', 'No hay descripcion disponible.', 0, 0),
	(11, 'Stalker 3', 2, 1, 30, 'img/stalker3.jpg', 'No hay descripcion disponible.', 0, 0);
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;

-- Volcando estructura para tabla dwec_tiendajunio_atc.sede
DROP TABLE IF EXISTS `sede`;
CREATE TABLE IF NOT EXISTS `sede` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ciudad` varchar(50) DEFAULT NULL,
  `calle` int(11) DEFAULT NULL,
  `codigoPost` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla dwec_tiendajunio_atc.sede: ~0 rows (aproximadamente)
DELETE FROM `sede`;
/*!40000 ALTER TABLE `sede` DISABLE KEYS */;
/*!40000 ALTER TABLE `sede` ENABLE KEYS */;

-- Volcando estructura para tabla dwec_tiendajunio_atc.subcategoria
DROP TABLE IF EXISTS `subcategoria`;
CREATE TABLE IF NOT EXISTS `subcategoria` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `categoria` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_subcategoria_categoria` (`categoria`),
  CONSTRAINT `FK_subcategoria_categoria` FOREIGN KEY (`categoria`) REFERENCES `categoria` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla dwec_tiendajunio_atc.subcategoria: ~34 rows (aproximadamente)
DELETE FROM `subcategoria`;
/*!40000 ALTER TABLE `subcategoria` DISABLE KEYS */;
INSERT INTO `subcategoria` (`id`, `nombre`, `categoria`) VALUES
	(1, 'Shooter Multijugador', 1),
	(2, 'Primera Persona', 1),
	(3, 'Realista o Tactico', 1),
	(4, 'Light Gun Shooter', 1),
	(5, 'Shooter en Tercera Persona', 1),
	(6, 'Shoot\'em up', 1),
	(7, 'Aventura Narrativa', 2),
	(8, 'Point and Click', 2),
	(9, 'Walking Simulator', 2),
	(10, 'Boxeo', 3),
	(11, 'Lucha 1º Persona', 3),
	(12, 'Lucha 2D', 3),
	(13, 'Lucha 3D', 3),
	(14, 'MMA', 3),
	(15, 'Lucha tipo Melee', 3),
	(16, 'Plataformas', 4),
	(17, 'Escape Rooms', 4),
	(18, 'Musical', 4),
	(19, 'Objetos Ocultos', 4),
	(20, 'Sudoku', 4),
	(21, 'Aventura de Acción', 5),
	(22, 'Casual', 5),
	(23, 'Metroidvania', 5),
	(24, 'Run and Gun', 5),
	(25, 'Arcade', 5),
	(26, 'Hack and Slash', 5),
	(27, 'Survival Horror', 5),
	(28, 'Zombies', 5),
	(29, 'Ajedrez', 6),
	(30, 'Caza', 6),
	(31, 'Rugby', 6),
	(32, 'Tenis', 6),
	(33, 'Hockey', 6),
	(34, 'Manager', 6);
/*!40000 ALTER TABLE `subcategoria` ENABLE KEYS */;

-- Volcando estructura para tabla dwec_tiendajunio_atc.tienda
DROP TABLE IF EXISTS `tienda`;
CREATE TABLE IF NOT EXISTS `tienda` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sede` int(11) NOT NULL DEFAULT 0,
  `calle` varchar(50) DEFAULT NULL,
  `codigoPost` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_tienda_sede` (`sede`),
  CONSTRAINT `FK_tienda_sede` FOREIGN KEY (`sede`) REFERENCES `sede` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla dwec_tiendajunio_atc.tienda: ~0 rows (aproximadamente)
DELETE FROM `tienda`;
/*!40000 ALTER TABLE `tienda` DISABLE KEYS */;
/*!40000 ALTER TABLE `tienda` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;

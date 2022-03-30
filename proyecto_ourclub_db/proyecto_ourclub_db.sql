-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema proyecto_ourclub_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema proyecto_ourclub_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `proyecto_ourclub_db` DEFAULT CHARACTER SET utf8 ;
USE `proyecto_ourclub_db` ;

-- -----------------------------------------------------
-- Table `proyecto_ourclub_db`.`categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proyecto_ourclub_db`.`categoria` (
  `idcategorias` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idcategorias`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `proyecto_ourclub_db`.`producto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proyecto_ourclub_db`.`producto` (
  `idproducto` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(200) NOT NULL,
  `talla` FLOAT NOT NULL,
  `precio` FLOAT NOT NULL,
  `existencia` INT(50) NOT NULL,
  `categoria_idcategorias` INT NOT NULL,
  PRIMARY KEY (`idproducto`, `categoria_idcategorias`),
  INDEX `fk_producto_categoria_idx` (`categoria_idcategorias` ASC) VISIBLE,
  CONSTRAINT `fk_producto_categoria`
    FOREIGN KEY (`categoria_idcategorias`)
    REFERENCES `proyecto_ourclub_db`.`categoria` (`idcategorias`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `proyecto_ourclub_db`.`rol`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proyecto_ourclub_db`.`rol` (
  `idrol` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idrol`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `proyecto_ourclub_db`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proyecto_ourclub_db`.`usuario` (
  `idusuario` INT NOT NULL AUTO_INCREMENT,
  `correo` VARCHAR(45) NOT NULL,
  `contrasena` VARCHAR(45) NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `telefono` VARCHAR(14) NOT NULL,
  `rol_idrol` INT NOT NULL,
  PRIMARY KEY (`idusuario`, `rol_idrol`),
  INDEX `fk_usuario_rol1_idx` (`rol_idrol` ASC) VISIBLE,
  CONSTRAINT `fk_usuario_rol1`
    FOREIGN KEY (`rol_idrol`)
    REFERENCES `proyecto_ourclub_db`.`rol` (`idrol`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `proyecto_ourclub_db`.`pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proyecto_ourclub_db`.`pedido` (
  `idpedido` INT NOT NULL AUTO_INCREMENT,
  `subtotal` FLOAT NOT NULL,
  `total` FLOAT NOT NULL,
  `iva` FLOAT NOT NULL,
  `usuario_idusuario` INT NOT NULL,
  PRIMARY KEY (`idpedido`, `usuario_idusuario`),
  INDEX `fk_pedido_usuario1_idx` (`usuario_idusuario` ASC) VISIBLE,
  CONSTRAINT `fk_pedido_usuario1`
    FOREIGN KEY (`usuario_idusuario`)
    REFERENCES `proyecto_ourclub_db`.`usuario` (`idusuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `proyecto_ourclub_db`.`infousuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proyecto_ourclub_db`.`infousuario` (
  `idinfousuario` INT NOT NULL AUTO_INCREMENT,
  `direccion` VARCHAR(150) NOT NULL,
  `ciudad` VARCHAR(45) NOT NULL,
  `cp` INT(10) NOT NULL,
  `numtarjeta` VARCHAR(16) NOT NULL,
  `expmes` INT(2) NOT NULL,
  `expano` INT(4) NOT NULL,
  `usuario_idusuario` INT NOT NULL,
  PRIMARY KEY (`idinfousuario`, `usuario_idusuario`),
  INDEX `fk_infousuario_usuario1_idx` (`usuario_idusuario` ASC) VISIBLE,
  CONSTRAINT `fk_infousuario_usuario1`
    FOREIGN KEY (`usuario_idusuario`)
    REFERENCES `proyecto_ourclub_db`.`usuario` (`idusuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `proyecto_ourclub_db`.`infopedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proyecto_ourclub_db`.`infopedido` (
  `idinfopedido` INT NOT NULL AUTO_INCREMENT,
  `cantidad` INT(50) NOT NULL,
  `preciounitario` INT(100) NOT NULL,
  `pedido_idpedido` INT NOT NULL,
  `producto_idproducto` INT NOT NULL,
  PRIMARY KEY (`idinfopedido`, `pedido_idpedido`, `producto_idproducto`),
  INDEX `fk_infopedido_pedido1_idx` (`pedido_idpedido` ASC) VISIBLE,
  INDEX `fk_infopedido_producto1_idx` (`producto_idproducto` ASC) VISIBLE,
  CONSTRAINT `fk_infopedido_pedido1`
    FOREIGN KEY (`pedido_idpedido`)
    REFERENCES `proyecto_ourclub_db`.`pedido` (`idpedido`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_infopedido_producto1`
    FOREIGN KEY (`producto_idproducto`)
    REFERENCES `proyecto_ourclub_db`.`producto` (`idproducto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

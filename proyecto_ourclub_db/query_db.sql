-- Selecionar base de datos
use proyecto_ourclub_db;

-- Ingresar valores a categoria
insert into categoria (nombre) values('Hombre fútbol');
insert into categoria (nombre) values('Hombre lifestyle');
insert into categoria (nombre) values('Hombre running');
insert into categoria (nombre) values('Hombre skateboarding');
insert into categoria (nombre) values('Mujer fútbol');
insert into categoria (nombre) values('Mujer lifestyle');
insert into categoria (nombre) values('Mujer running');
insert into categoria (nombre) values('Mujer skateboarding');

-- Ingresar valores a rol
insert into rol (nombre) values ('administrador');
insert into rol (nombre) values ('usuario');


-- Ingresar valores a usuario
insert into usuario (correo, contrasena, nombre, telefono, rol_idrol)
values('usuario2@gmail.com', '1234usuario2*', 'María García ', '2221254123', 2);

insert into usuario (correo, contrasena, nombre, telefono, rol_idrol)
values('usuario1@gmail.com', '1234usuario*', 'Juan Pérez ', '2221254589', 2);

insert into usuario (correo, contrasena, nombre, telefono, rol_idrol)
values('ourclub.alpha@gmail.com', '1234Marco*', 'alpha team', '2474713828', 1);





-- Ingresar valores a infousuario
insert into infousuario (direccion, ciudad, cp, numtarjeta, expmes, expano, usuario_idusuario)
values('privada San Francisco de Asís 8', 'Puebla', 72000, '1234567891234567', 12, 2022, 1);

insert into infousuario (direccion, ciudad, cp, numtarjeta, expmes, expano, usuario_idusuario)
values('Avenida siempre viva 10', 'Guanajuato', 36000, '1234567891234000', 08, 2025, 2);

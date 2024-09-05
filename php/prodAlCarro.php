<?php
include_once 'ConexionBDD.php';
global $conexion;
$cliente = json_decode($_REQUEST["cliente"]);
function generateRandomString($length)
{
    return substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 0, $length);
}
$clave = generateRandomString(10);
$orden1 = "INSERT INTO direccion1 
			VALUES (null,?,?,?);";
$sentencia = $conexion->prepare($orden1);
$sentencia->bind_param("sss", $cliente->ciudad, $cliente->calle, $cliente->codPost);
$resultado = $sentencia->execute();
if ($conexion->affected_rows == 1) {
    echo json_encode(1);
} else {
    echo json_encode(0);
}

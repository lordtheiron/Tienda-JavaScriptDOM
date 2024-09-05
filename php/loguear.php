<?php
include_once 'ConexionBDD.php';
global $conexion;
$cliente = json_decode($_REQUEST["cliente"]);
$email = $cliente->email;
$clave = $cliente->clave;
$orden = "SELECT nombre FROM cliente WHERE correo='$email' AND clave='$clave';";
$resultado = $conexion->query($orden);
if ($resultado !== false && $resultado->num_rows > 0) {
    echo json_encode(1);
} else {
    echo json_encode(0);
}

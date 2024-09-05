<?php

include_once 'conexionBDD.php';
global $conexion;

$ofertas = array();


$ordenSQL = "SELECT o.id, p.nombre, p.precio, o.descuento, ( p.precio -( p.precio * o.descuento / 100 )) AS precio_descuento, imagen, p.descripcion 
FROM ofertas o, producto p
WHERE o.producto=p.id";
$resultado = $conexion->query($ordenSQL);

if ($resultado->num_rows > 0) {
	$ofertas = $resultado->fetch_object();
	while ($ofertas) {
		$ArrOfertas[] = $ofertas;
		$ofertas = $resultado->fetch_object();
	}
	$json = json_encode($ArrOfertas);
} else {
	$error = "ha ocurrido un error";
	$json = JSON_encode($error);
}
echo $json;
mysqli_close($conexion);

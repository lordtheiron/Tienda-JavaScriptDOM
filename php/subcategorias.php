<?php
include_once 'conexionBDD.php';
global $conexion;
$productos = array();

$subcat = json_decode($_REQUEST['subcat']);
$ordenSQL = "SELECT id, nombre, existencias, precio, imagen, descripcion 
			FROM producto
			WHERE subcategoria=$subcat";
$resultado = $conexion->query($ordenSQL);

if ($resultado->num_rows > 0) {
	$productos = $resultado->fetch_object();
	while ($productos) {
		$ArrProd[] = $productos;
		$productos = $resultado->fetch_object();
	}
	$json = json_encode($ArrProd);
} else {
	$error = "ha ocurrido un error";
	$json = JSON_encode($error);
}
echo $json;
mysqli_close($conexion);

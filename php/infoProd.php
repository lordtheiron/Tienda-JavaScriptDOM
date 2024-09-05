<?php
include_once 'conexionBDD.php';
global $conexion;
$productos = array();

$prod = json_decode($_REQUEST['prod']);
$ordenSQL = "SELECT p.id, p.nombre, p.existencias, p.precio, p.imagen, p.descripcion 
                FROM producto p, categoria c, subcategoria s 
                WHERE p.subcategoria=s.id AND s.categoria=c.id 
                AND p.id = $prod";
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

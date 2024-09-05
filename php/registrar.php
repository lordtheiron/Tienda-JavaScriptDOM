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
$orden2 = "INSERT INTO cliente(nombre, correo, dni, clave, direccion1) 
			VALUES (?,?,?,?,  
			(SELECT id FROM direccion1 
			WHERE ciudad=? AND calle=? AND codigoPost=?))";
$sentencia = $conexion->prepare($orden2);
$sentencia->bind_param("sssssss", $cliente->nombre, $cliente->email, $cliente->dni, $clave, $cliente->ciudad, $cliente->calle, $cliente->codPost);
$resultado = $sentencia->execute();

if ($conexion->affected_rows == 1) {
	echo json_encode(1);
	$to = $cliente->email;
	$subject = "Clave de Registro.";
	$txt = "Estimado cliente $cliente->nombre,
	con domicilio en $cliente->calle, $cliente->codPost, $cliente->ciudad 
	su nueva clave es: $clave.";
	$headers = "From: admin@games.com " . "\r\n";
	$headers .= "Reply-To: admin@games.com  " . "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
	$message = '<html><body>';
	$message .= '<img src="https://cdnb.artstation.com/p/assets/covers/images/000/862/899/large/xavier-henry-artstatione3banner.jpg?1434823121" alt="Website Change Request" />';
	$message .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
	$message .= "<tr style='background: #eee;'><td><strong>Name:</strong> </td><td>" . $cliente->nombre . "</td></tr>";
	$message .= "<tr><td><strong>Email:</strong> </td><td>" . $cliente->email . "</td></tr>";
	$message .= "<tr><td><strong>DNI:</strong> </td><td>" . $cliente->dni . "</td></tr>";
	$message .= "<tr><td><strong>Direccion:</strong> </td><td>" . $cliente->calle . "</td></tr>";
	$message .= "<tr><td><strong>Ciudad:</strong> </td><td>" . $cliente->ciudad . "</td></tr>";
	$message .= "<tr><td><strong>Codigo Postal:</strong> </td><td>" . $cliente->codPost . "</td></tr>";
	$message .= "<tr><td><strong>Clave de acceso:</strong> </td><td>" . $clave . "</td></tr>";
	$message .= "</table>";
	$message .= "</body></html>";
	mail($to, $subject, $message, $headers);
} else {
	echo json_encode(0);
}

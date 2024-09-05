<?php
    $conexion = new mysqli("localhost","root","");
    /* 
     Fichero para conectar con la base de datos que tengamos
     * @$conexion
     *  Es 0 cuando no hay error
     *  1045 cuando el usuario o clave no son correctos
     *  2002 cuando el servidor no es correcto
     */
    
    $conexion->set_charset("utf8");
    //Para evitar que se interpreten mal las tildes y ñ
    if(!$conexion->connect_error){
        # Selecionar la base de datos
        $conexion->select_db("dwec_tiendajunio_atc") or die ("Base de datos no encontrada");
    }
    else{
        echo "<h2>No ha sido posible crear la conexion con el servidor</h2><br>";
    }
    
?> 
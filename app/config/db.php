<?php 

$servername = "localhost";
$dbusername = "root";
$dbpassword = "root";
$database = "biblioteca";

$conn = new mysqli($servername, $dbusername, $dbpassword,$database);

if($conn->connect_error){
    die("error de base de datos ".$conn->connect_error);
}


echo "Conexion OKAY";
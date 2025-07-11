<?php

$servername = "localhost";
$dbusername = "root";
$dbpassword = "root";
$database = "biblioteca";

$conn = new mysqli($servername, $dbusername, $dbpassword, $database);

if ($conn->connect_error) {
    die("error de base de datos " . $conn->connect_error);
}


echo "Conexion OKAY<br>";
/*

UNIDAD 5
$sql = "select * from users";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo $row["id"] . "-" . $row["username"] . "-" . $row["password"] . "-" . $row["name"] . "-" . $row["rol"] . "<br>";
    }
} else {
    echo "No se encontraron registros. <br>";
}

$sql = "UPDATE users SET name = 'Karol' where id = 1";

if ($conn->query($sql) === TRUE) {
    echo "Registro actualizado correctamente. <br>";
} else {
    echo "No se actualizo registros. <br>";
}

$sql = "INSERT INTO users (username, password, name, rol) VALUES ('trojas','123456','Tatiana','encargado')";
if($conn->query($sql) === TRUE){
     echo "Registro insertado correctamente. <br>";
} else {
     echo "No se inserto registros. <br>";
}
  

$sql = "DELETE FROM users where id = 3";

if ($conn->query($sql) === TRUE) {
    echo "Registro eliminado correctamente. <br>";
} else {
    echo "No se elimino registros. <br>";
}
   */

// hash 
/*
$clave = "123Queso";

//$hash = password_hash($clave,PASSWORD_BCRYPT);

$hash_clave_db = "$2y$10$/yGGc9O8ooFYVuT/yyFRpe8zqnixL2128ZhPAmr36B1CbgbckELXi";

echo $hash;

if (password_verify($clave, $hash_clave_db)) {
    echo "clave es valida";
} else {
    echo "clave es incorrecta";
}
*/
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
/*
$sql = "INSERT INTO users (username, password, name, rol) VALUES ('trojas','123456','Tatiana','encargado')";
if($conn->query($sql) === TRUE){
     echo "Registro insertado correctamente. <br>";
} else {
     echo "No se inserto registros. <br>";
}
     */

$sql = "DELETE FROM users where id = 3";

if ($conn->query($sql) === TRUE) {
    echo "Registro eliminado correctamente. <br>";
} else {
    echo "No se elimino registros. <br>";
}

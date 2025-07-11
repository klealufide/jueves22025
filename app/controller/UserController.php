<?php
require_once '../model/User.php';

$username = $_POST["username"];
$password = $_POST["password"];

if ($username != "" && $password != "") {
    $user = User::login($username);
    if (!empty($user)) {
        if(password_verify($password, $user[0]["password"])){
            session_start();
            $_SESSION["username"] = $username;
            $_SESSION["rol"] = $user[0]["rol"];
            $_SESSION["name"] = $user[0]["name"];
            header("Location: ../../dashboard.php");
        } else {
            echo "Autentificacion incorrecta!";
        }
    } else {
        echo "Usuario no existe!";
    }
} else {
    echo "Datos incompletos!";
}

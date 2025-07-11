<!DOCTYPE html>
<html>

<head>
    <title>Unidad 5</title>
</head>

<body>
    <h1>Bienvenido</h1>

    <?php
    session_start();
    if (!empty($_SESSION)) {
        echo "Hola, " . $_SESSION["name"] . "! <br> <a href='logout.php'>Salir  </a>";
    } else {
        echo "No tiene permisos para ver este sitio!";
    }

    ?>

</body>

</html>
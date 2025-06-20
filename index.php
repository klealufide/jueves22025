<!DOCTYPE html>
<html>
    <head>Unidad 4 - PHP</head>
    <body>
        <h1>Unidad 4 - PHP</h1>
        <?php 
            echo "<h3> Hola!</h3>";

            $nombre = "Karol";
            $edad = "32";
            $altura = 1.58;

            echo $nombre."<br>";
            echo  $edad+2;
            $edad = "treinta y dos";
            echo $edad  . $nombre;
        ?>
    </body>
</html>
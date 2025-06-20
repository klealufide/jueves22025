<!DOCTYPE html>
<html>

<head>Unidad 4 - PHP</head>

<body>
    <h1>Unidad 4 - PHP</h1>
    <?php
    $espacio = "<br>";
    echo "<h3> Hola!</h3>";

    $nombre = "Karol";
    $edad = "32";
    $altura = 1.58;

    echo $nombre . "<br>";
    echo  $edad + 2;
    $edad = "treinta y dos";
    echo $edad  . $nombre;

    $edadMayor = 18;

    echo $espacio;


    if ($edad >= $edadMayor) {
        echo "Mayor de edad" . $espacio;
    } else {
        echo "Es menor de edad" . $espacio;
    }

    $esEstudiante = false;
    if ($edad >= $edadMayor) {
        if ($esEstudiante) {
            echo "Mayor de edad y es estudiante" . $espacio;
        } else {
            echo "Mayor de edad pero no es estudiante" . $espacio;
        }
    } else {
        if ($esEstudiante) {
            echo "Es menor de edad y es estudiante" . $espacio;
        } else {
            echo "Es menor de edad pero no es estudiante" . $espacio;
        }
    }

    if ($edad >=  $edadMayor && $esEstudiante) {
        echo "Mayor de edad y es estudiante" . $espacio;
    } elseif ($edad >=  $edadMayor) {
        echo "Mayor de edad pero no es estudiante" . $espacio;
    } elseif ($edad <  $edadMayor && $esEstudiante) {
        echo "Es menor de edad y es estudiante" . $espacio;
    } else {
        echo "Es menor de edad pero no es estudiante" . $espacio;
    }

    if(!$esEstudiante){
        echo "No es estudiante" . $espacio;
    }
    if($esEstudiante || $edad >=  $edadMayor ){ // o
        echo "es estudiante o mayor de edad". $espacio;
    }

    if($esEstudiante || $edad < $edadMayor){
        echo "No es estudiante y es menor de edad".  $espacio;
    } else {
        echo "No entro por que ambos son false".  $espacio;
    }

    $semaforo = "azul";

    switch ($semaforo) {
        case 'verde':
            echo "siga!" . $espacio;
            break;
        case 'rojo':
            echo "detiene!" . $espacio;
            break;
        case 'amarillo':
            echo "cuidado!" . $espacio;
            break;
        default:
            echo "color no definido" . $espacio;
            break;
    }

    $a = 5;
    $b = "5";

    if ($a == $b) {
        echo "El valor de a y b son iguales" . $espacio;
    }

    if ($a === $b) {
        echo "el valor y el tipo de a y b son iguales" . $espacio;
    }

    if ($a != $b) {
        echo "el valor de a y b son diferentes" . $espacio;
    }
    if ($a !== $b) {
        echo "el valor o el tipo de a y b son diferentes" . $espacio;
    }
    ?>
</body>

</html>
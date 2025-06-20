document.addEventListener("DOMContentLoaded", function () {
    let nombre = "Karol Leal";
    let edad = 35;
    let estatura = 1.60;
    let esEstudiante = false;

    let mensajeSpan = document.getElementById("mensaje");
    mensajeSpan.style.display = "none";

    console.log(nombre);
    console.log(edad);
    console.log(estatura);
    console.log(esEstudiante);

    let total = 0;

    console.log(total);

    function suma(a, b) {
        total = a + b;
        console.log(total);
    }

    suma(2, 4);
    console.log(total);

    console.log(nombre.length);
    console.log(nombre.replaceAll("o", "0"));
    console.log(nombre.endsWith("eal"));

    console.log(edad.toString());
    console.log(estatura.toFixed(1));

    let mensaje = edad >= 18 ? "SI es mayor de edad" : "NO es mayor de edad";
    console.log(mensaje);
    edad = 10;
    if (edad >= 18) {
        console.log("Es mayor de edad");
    }

    let nota = 50;

    if (nota >= 70) {
        console.log("Aprobo");
    } else {
        console.log("reprobo");
    }

    //if, else if, else if else -> switch

    if (nota >= 80) {
        console.log("Nota Excelente");
    } else if (nota <= 79 && nota >= 60) {
        console.log("debes mejorar");
    } else {
        console.log("repruebas")
    }


    let semaforo = "rojo";

    if (semaforo == "rojo") {
        console.log("detengase");
    } else if (semaforo == "verde") {
        console.log("siga");
    } else if (semaforo == "amarillo") {
        console.log("precaucion");
    } else {
        console.log("COlor no existe");
    }

    switch (semaforo) {
        case 'rojo':
            console.log("detengase");
            break;
        case 'verde':
            console.log("siga");
            break;
        case 'amarillo':
            console.log("precaucion");
            break;
        default:
            console.log("COlor no existe");
            break;
    }

    for (let i = 0; i < 10; i++) {
        console.log(i);
    }


    for (let i = 0; i <= 10; i++) {
        console.log("Tabla 4 * " + i + " = " + (4 * i));
    }

    let listaFrutas = [
        'melon',
        "sandia",
        "papaya"
    ];

    for (let i = 0; i < listaFrutas.length; i++) {
        console.log(listaFrutas[i]);
    }

    for (x in listaFrutas) {
        console.log(listaFrutas[x]);
    }

    edad = 49;


    while (edad < 50) {
        edad += 1;
        console.log("WHILE" + edad);
    }
    // al menos 1 vez


    do {
        edad += 1;
        console.log("DOWHILE" + edad);
    } while (edad < 50)


    function sumar(a, b) {
        return a + b;
    }

    let resultado = sumar(4, 5);
    console.log(resultado);

    console.log(sumar(3, 4));

    function saludar(nombre) {
        console.log("Hola!! " + nombre);
    }

    saludar("karol");


    let titulo = document.getElementById("titulo");

    titulo.innerText = "Semana 05";
    titulo.style.color = "red";

    let subtitulo = document.getElementById("tituloTareas");
    subtitulo.style.color = "blue";

    console.log(titulo);

    let listaTareas = document.getElementById("listaTareas");
    let nuevaTarea = document.createElement("li");
    nuevaTarea.innerText = "Tarea 4";
    listaTareas.appendChild(nuevaTarea);

    let seccionImagen = document.getElementById("seccionImagen");
    let nuevoSubtitulo = document.createElement("h2");
    nuevoSubtitulo.innerText = "Seccion de imagen";
    seccionImagen.appendChild(nuevoSubtitulo);

    let link = document.getElementById("link");
    link.setAttribute("href", "https://www.fidelitasvirtual.org/");

    let imagen = document.getElementById("imagen");

    imagen.addEventListener("mouseenter", function () {
        imagen.setAttribute("src", "./img/salon.jpg");
    })


    imagen.addEventListener("mouseleave", function () {
        imagen.setAttribute("src", "./img/img1.jpg");
    })

    let agregarTareaBtn = document.getElementById("agregarTarea");

    agregarTareaBtn.addEventListener("click", function () {
        let nuevaTarea = document.getElementById("nuevaTarea");
        if (nuevaTarea.value != "") {
            let nuevaTareaElmento = document.createElement("li");
            nuevaTareaElmento.innerText = nuevaTarea.value;
            listaTareas.appendChild(nuevaTareaElmento);
            nuevaTarea.value = "";
            mensajeSpan.style.display = "none";
            nuevaTarea.style.borderColor = "black";
        } else {
            mensajeSpan.style.display = "block";
            nuevaTarea.style.borderColor = "red";
        }

    });


});

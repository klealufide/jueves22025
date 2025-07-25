$(function () {
    let titulo = document.getElementById("titulo");
    let tituloJQ = $("#titulo");

    tituloJQ.text("Semana 10 - Unidad 6");

    let grupo1 = $(".grupo1");
    console.log(grupo1);

    let elementoH3 = $("h3");
    console.log(elementoH3);

    let hijos = $("ul > li");
    console.log(hijos);

    let multiselector = $("#titulo, .grupo2, h2");
    console.log(multiselector);

    $("#btnSaludar").on("click", function () {
        $(".grupo2").css("color", "purple");
        $("#titulo").addClass("grupo1");
    });

    $("#btnAgregarTarea").on("click", function () {
        let tarea = $("#tarea").val();
        if (tarea == "") {
            $("#tarea").css("borderColor", "red");
        } else {
            $("#tarea").css("borderColor", "black");
            $("#titulo").removeClass("grupo1");
        }
    })

    $("img").on("mouseenter", function () {
        $("img").attr("src", "img/biblioteca.jpg");
    })

    $("img").on("mouseleave", function () {
        $("img").attr("src", "img/img1.jpg");
    })

    $("#mostrar").on("click", function () {
        $("#cuadrado").fadeIn(1000);
    })

    $("#ocultar").on("click", function () {
        $("#cuadrado").fadeOut(1000);
    })

    $("#cambiarTamanno").on("click", function () {
        $("#cuadrado").animate({
            width: '200px',
            height: '200px',
            opacity: 0.5
        })
    })

    $("#original").on("click", function () {
        $("#cuadrado").animate({
            width: '100px',
            height: '100px',
            opacity: 1  
        })
    })
})
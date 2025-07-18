$(function() {
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

    $("#btnSaludar").on("click", function(){
        alert("Hola!");
    });
})
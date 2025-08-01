$(function () {
    /*
    document.getElementById("buscarPokemon").addEventListener("click", function(){
        let pokemon = document.getElementById("pokemon").value;
        const urlBase = "https://pokeapi.co/api/v2/";
        let endpoint = "pokemon/";
        if(pokemon != ""){
            fetch(urlBase + endpoint + pokemon)
            .then(response => response.json())
            .then(data => {
                document.getElementById("contenidoPokemon").innerHTML = "<h2>"+data.name+"</h2><img src='"+data.sprites.front_default+"'>";
            })
            .catch(error => console.log(error))
        }
    })
        */
    $("#buscarPokemon").on("click", function () {
        let pokemon = $("#pokemon").val();
        const urlBase = "https://pokeapi.co/api/v2/";
        let endpoint = "pokemon/";
        if (pokemon != "") {
            $.get(urlBase + endpoint + pokemon, function (data) {
                $("#contenidoPokemon").html("<h2>" + data.name + "</h2><img src='" + data.sprites.front_default + "'>");
            })
        }
    })

    $("#buscarFrase").on("click", function () {
        //let pokemon = $("#pokemon").val();
        const urlBase = "https://api.breakingbadquotes.xyz/v1/";
        let endpoint = "quotes/";
        $.get(urlBase + endpoint, function (data) {
            $("#contenidoFrase").html("<h2>" + data[0].author + "</h2><p>" + data[0].quote + "</p>");
        })
    })
})
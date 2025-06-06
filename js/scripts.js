let nombre = "Karol Leal";
let edad = 12;
let estatura = 1.60;
let esEstudiante = false;

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
console.log(nombre.replaceAll("o","0"));
console.log(nombre.endsWith("eal"));

console.log(edad.toString());
console.log(estatura.toFixed(1));
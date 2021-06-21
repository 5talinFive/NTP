console.log("Hola mundo");
//Consultar metodos de console.

//METODOS console.
console.clear("Se usa para limpiar la consola del navegador");
console.log("Salida por consola de cualquier tipo de dato")
console.error("Este es un Error :(");
console.assert("Stalin");
console.warn("Advertencia salida en color amarillo");


console.time('abc');
let fun = function () {
    console.log('La fun esta corriendo...');
}
let fun2 = function () {
    console.log('fun2 esta corriendo...');
}
fun(); //llamada a la fun();
fun2(); //llamada a la fun2();
console.time('abc');

console.table({ 'Stalin': 1, 'Javier': 2 });

for (let i = 0; i < 5; i++) {
    console.count(i);
}

const estudiante = {
    nombre: "Stalin",
    apellido: "Sarango",
    carrera: "Analisis de sistemas"
}
console.dir(estudiante);
console.trace("Error");

console.log(console);
console.table(Object.entries(console).sort());

const numeros = [1, 2, 3, 4, 5],
    vocales = ["a", "e", "i", "o", "u"];
console.table(numeros);
console.table(vocales);

const perro = {
    nombre: "titan",
    raza: "doberman",
    color: "negro"
}
console.table(perro);

console.clear();

console.time("Inicio");
const arreglo = Array(1000000);
for (let i = 0; i < arreglo.length; i++) {
    arreglo[i] = i;
}
console.timeEnd("Inicio");

let x = 1,
    y = 2,
    pruebaXY = "Se espera que X siempre sea menor que Y";
console.assert(x < y, { x, y, pruebaXY });

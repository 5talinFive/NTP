//Retorna valores
function saludar(){
    return "hola soy Stalin";
}
// var resultado = saludar();
// console.log(resultado);
//console.log(saludar());

//FUNCIONES Void
// function saludar2() {
//     console.log("Hola soy Stalin otra vez");
// }
// saludar2();


//Funciones con parametros
function saludarConParametros(nombre, apellido) {
    return `Hola soy ${nombre} ${apellido}`;
}  
// console.log(saludarConParametros("Stalin", "Sarango"));


//Funciones con paramepros por defecto
function saludoConProfesion(nombre="Persona", profesion="Analista de sistemas") {
    return `Hola ${nombre} mi profesion es ${profesion}`;
}
// console.log(saludoConProfesion("5talin"));



/*
FUNCIONES EXPRESIVAS - FUNCIONES ANONIMAS
*/
var saludoConEdad = function(nombre, edad) {
    return `Hola soy ${nombre} y tengo ${edad} años`;
}
console.log(saludoConEdad("5talin", 57));


/**
 ARROW FUNCTION _FUNCIONES FLECHA
 */
var saludoConApellido = (nombre, apellido) => {
    return `Hola soy ${nombre} ${apellido}`;
}
var saludoConApellido = (nombre, apellido) => `Hola soy ${nombre} ${apellido}`
var suma = (num1, num2) => num1 + num2
// console.log(suma(2,5));
// console.log(saludoConApellido("Javier", "Sarango"));


/*
FUNCIONES COMO PARTE DE OTRAS FUNCIONES
*/
function saludoConFunciones(nombre, cb) {
    return cb(nombre);
}
var miSaludo = saludoConFunciones("5talin55", function(nombre){
    return `Hola soy ${nombre}`;
});
var miSaludo = saludoConFunciones("5talin55", (nombre) =>`Hola soy ${nombre}`)
// console.log(miSaludo)

//Tiempo de salida
// setTimeout(() => {
//     console.log("hola mundo");
// }, 3000);


//Tiempo en ejecutarse
// setInterval(() => {
//     console.log("hola mundo");
// }, 2000);





    



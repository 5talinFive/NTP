var numeros = [1,2,3,4,5];
var nuevoNumeros  = numeros.concat([6,7,8,9,0]);
console.log(numeros);
console.log(nuevoNumeros);

/*
  JOIN
*/
var nombre = ["s","t","a","l","i", "n"];
console.log(nombre.join(""));


/*
 SLICE
*/
// console.log(nombre.slice(2));

/*
   INDEX OF 
*/
// console.log(nombre.indexOf("t"));


/*
    LAST INDEX OF
*/
// console.log(nombre.lastIndexOf("i"));


/*
        Reverse
*/
// console.log(nombre.reverse());

/*
            sort
*/
var numeroDesordenados = [4,6,4,1,0,7,8,2];
// console.log(numeroDesordenados.sort());

/*
            Shift
*/
// console.log(numeroDesordenados.shift());

/*
        Pop
*/
// console.log(numeroDesordenados.pop());

/*
        Push
*/
// console.log(numeroDesordenados.push(1012));
// console.log(numeroDesordenados);


var pares = [2,4,6,8,10];
console.log(pares.map((elemento) => elemento + 1));


/*DEBER*/
// Consultar funciones de modificacion de arreglos.
/*
            SPLICE
            Se mensionan las posiciones , remplazar, agregar o eliminar
*/
const frutas = ["manzana", "uvas", "mango", "pera"];
frutas.splice(1,2,"banana");
console.log(frutas);

/*
            fill
para rellenar elementos con el mismo valor.
*/
console.log(frutas.fill(6));

/*
            unshift
            Elimina agrega elementos
*/
console.log(frutas.unshift("sandia", "naranja"));


/*
            forEach
            recorre cada elemento del array
*/
const letras = ['a', 'b', 'c'];
letras.forEach(element => console.log(element));


/*
            find
devuelve el primer elementocumple la función de prueba 
proporcionada, .
*/
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
console.log(found);




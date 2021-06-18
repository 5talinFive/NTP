//Asignacion
// =

//Comparacion
// ==
// ===
console.log(2 == 2);
console.log(2 === '2');
console.log( 2 == '2');

/**
!= 
console.log(2 != 3);

>
<
>=
<=

*/

//Operadores de asignacion compuestos
/*

 += / x = x + y
 -= / x = x - y
 *=
 /=
 %=
 **=

 */

var numero = 3;
numero -= 2;
console.log(numero);

//Operadores Aritmeticos
/**
 
+
-
*
/
%
**

 */

//Desestructurar Objetos
var persona = {
    nombre: "Stalin",
    apellido: "Sarango",
    edad: 55,
    viajes: {
        destino1: "Colombia",
        destino2: "Mexico"
    } 
};
var { nombre:nombre2, apellido, viajes: {destino1} } = persona;
console.log(persona);
console.log(nombre2);
console.log(apellido);
console.log(destino1);





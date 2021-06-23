function Rectangulo(base, altura) {
    this.base = base;
    this.altura = altura;
}

Rectangulo.prototype.calcularArea = function () {
    return this.base * this.altura
}
var rectangulo = new Rectangulo(6, 3);

// console.log(rectangulo.calcularArea());
// console.log(rectangulo.base);

//Declaracion de clases
class Rectangulo2 {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura
    }
    calcularArea() {
        return this.base * this.altura
    }
}

var rectangulo2 = new Rectangulo2(6, 3);

// console.log(rectangulo2.calcularArea())


// Clase Persona
// implementar getters, setter y realizar una implementacion.
// implementar metodos estaticos - Clase Punto, Function distancia
// Construir clase Persona y estudiante, extender Estudiante con Persona>

//REST, SOAP, CONSULTAR
/*
            DEBER
*/

class Persona {
    constructor(nombre, edad) {
        //Atributos
        this.nombre = nombre;
        this.edad = edad;
    }
    //metodos
    sonar() {
        console.log("Hago sonidos porque estoy vivo");
    }
    saludar() {
        console.log(`Hola me llamo ${this.nombre} y tengo ${this.edad} años.`);
    }
}

//Extendemos nuestra clase persona a estudiante
class Estudiante extends Persona {
    constructor(nombre, edad, carrera) {
        //Con el metodo super se manda a llamar al constructor
        // de la clase padre
        super(nombre, edad);
        this.carrera = carrera;
        this.genero = null;
    }
    sonar() {
        console.log("Soy un estudiante y me gusta el desarrollo de software :)")
    }


    /** 
     * Un metodo estatico se puede ejecutar sin
     * necesidad de instanciar la clase
    */
    static queEres() {
        console.log("Soy un estudiante y me gusta JavaScript")
    }

    //Los SETTERS y GETTERS son metodos especiales 
    //que nos permiten establecer y obtener los valores de
    //atributos de nuestra clase 
    get getGenero() {
        return this.genero;
    }
    set setGenero(genero) {
        this.genero = genero;
    }
}

//Ejecucion de METODO ESTATICO
Estudiante.queEres();


const stalin = new Persona("Stalin", 55),
    karla = new Estudiante("Karla", 20, "Desarrollo de software");

console.log(stalin);
console.log(karla);

stalin.saludar();
stalin.sonar();
karla.saludar();
karla.setGenero = "Femenino";
console.log(` Mi genero es: ${karla.getGenero}`);
karla.sonar();
// console.log(karla.getGenero);

/*
Las clases en JavaScript NO existen, fue implementado unicamente
como azucar sintetico para programadores que vienen de otros
lenguajes de programacion, JavaScript en su raiz sigue tratando
la POO como prototipos.
*/





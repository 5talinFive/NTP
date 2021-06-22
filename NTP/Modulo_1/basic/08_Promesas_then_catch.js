/*
            Promesas
*/
function promesa(bandera) {
    return new Promise((resolve, reject) => {
        if (bandera) {
            setTimeout(() => {
                resolve("Peticion Resuelta");
            }, 3000);
        } else {
            reject("La operacion fallo");
        }
    });
}

// promesa(false)
//     .then((resultado) => {
//         console.log("Respuesta positiva");
//     })
//     .catch((error) => {
//         console.log("Error", error);
//     });



//PROMESAS EXPRESIVAS

var segundaPromesa= () => new Promise((resolve, reject) => {
    if (bandera) {
        setTimeout(() => {
            resolve("Peticion Resuelta");
        }, 3000);
    } else {
        setTimeout(() => {

            reject("La operacion fallo");
        }, 2000)
    }
});
segundaPromesa(true)
.then((respuesta) => {
console.log(respuesta);
})
.catch((error) => {
    console.log(error);
});

promesa(true) //Prericion de clientes
.then((respuesta) => { //respuesta de lista de clientes
        console.log(respuesta)
        return segundaPromesa(true) //Compras del cliente
})
.then((respuesta) => { //respuesta de la segunda promesa
        console.log(respuesta) 
})
.catch((error) =>{
        console.log(error)
})

//todo piola 






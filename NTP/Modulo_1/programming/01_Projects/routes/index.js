//Traemos el paquete
const { Router } = require('express')

//Inicializamos router
const router = Router()

//creacion de los endpoint
router
    .get("/", (req, res) => {
        res.send("Hola mundo con ExpressJs");
    })
    .get("/saludo", () => {
        const { query } = req;
        res.json({
            saludo: `Hola soy ${query.nombre} ${query.apellido}`,
        });
    })
        .get("/saludo/:nombre", (req, res) => {
            const { params } = req;
            res.json({
                nombre: params.nombre,
            });
        });
        
        //Exportamos las rutas
        module.exports.RouterIndex = router
        
        // module = {
        //     exports: {
        //         RouterIndex: router
        //     }
        // }
        
        
        //CONSULTAR MIDLEWARE
    

        
        




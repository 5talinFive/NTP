//Traemos el paquete
const { Router } = require('express');
const data = require('../data.json');
//Inicializamos router
const router = Router()

//creacion de los endpoint
router
    .get("/", (req, res) => {
        res.send("Hola mundo con ExpressJs");
    })
    .get("/user", (req, res) => {
        res.json({
            msg: "Lista de usuarios",
            bosy: data,
        })
    })
    .get("/saludo", (req, res) => {
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
        // module.exports.RouterVideo = router
        
        // module = {
        //     exports: {
        //         RouterIndex: router
        //     }
        // }
        
        
        //CONSULTAR MIDLEWARE
    

        
        




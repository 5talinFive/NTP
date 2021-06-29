//Traemos el paquete
const { Router } = require('express');
const data = require('../data.json');
const { user } = require('../lib/Schema/User');
const { DataValidator } = require("../middleware/DataValidator");
//Inicializamos router
const router = Router()

//creacion de los endpoint
router
    .get("/", (req, res) => {
        res.send("Hola mundo con expressJs");
    })
    .get("/user", (req, res) => {
        res.json({
            msg: "Lista de usuarios",
            bosy: data,
        })
    })
    .get("/saludo", DataValidator("query", user), (req, res) => {
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
    

        
        




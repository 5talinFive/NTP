//Traemos el paquete
const { Router } = require('express');
const data = require('../data.json');
//Inicializamos router
const router = Router()

//Edita nombres a MAYUSCULA 
// var editData = data.map((person) => {
//     person.first_name = person.first_name.toUpperCase()
//     person.last_name = person.last_name.toUpperCase()
//     return person
// })

// console.log(editData)

// var editLast = data.map((person) => {
//     person.last_name = person.last_name.toUpperCase()
//     return person
// }) 

//Filtramos por ID
// var filterResult = editData.filter((person) => person.id === '')
// console.log(filterResult)

//creacion de los endpoint
router
    .get("/", (req, res) => {
        res.send("Hola deber");
    })
    .get("/user", (req, res) => {
        res.json({
            msg: "Lista de usuarios",
            body: data.map((person) => {
                person.first_name = person.first_name.toUpperCase();
                person.last_name = person.last_name.toUpperCase();
                return person;
              }),   
        })
    })
    .get("/users-params/:last_name", (req, res) => {
        const { last_name } = req.params;
        var dato = data.find(user => user.last_name === last_name)
        var {email} = dato;
        if(dato) {
            return res.json({
                    msg: "Usuario filtrado por params",
                    body : email
                });
            }else{
                return res.json({
                    msg: "Usuario filtrado por Params",
                    body:editData
                });
            }
            })

            .get("/users-query", (req, res) => {
                const { query } = req;
                res.json({
                  msg: "Usuario encontrado por id ",
                  body: data.filter((r) => {
                      if (!req.query.id) {
                          return data
                      }else{
                   return r.id == req.query.id;
                      }
                  }),
                });
              })
        
        //Exportamos las rutas
        module.exports.RouterIndex = router
        
        
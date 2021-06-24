const express = require('express'); 

//genero una aplicacion express
const app = express()
//EndPoint
app.get('/', (req, res) => {
    res.send("Hla mundo con ExpressJs");
})

app.get("/saludo", (req, res) =>{
    //Objeto req.query
    // console.log(req.query);
    //Obtenemos la query del Objeto request
    const { 
        query: { nombre, apellido }, 
    } = req;

    res.json({
        saludo: `Hla soy ${nombre} ${apellido}`,
    });
});

app.get("/saludo/:nombre", (req, res) => {
    const { 
        params: { nombre }, 
    } = req;
    console.log(req.params);
    

    res.json({
        nombre: nombre,
    })
})

app.listen(3000, () => {
    console.log("Servidor escuchando en http://localhost:3000");
});
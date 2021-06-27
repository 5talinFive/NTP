const express = require('express');

//genero una aplicacion express
const app = express()

//Routes
const { RouterIndex } = require('./routes/deber');

app.use("/", RouterIndex);
// app.use("/user", RouterIndex);
// app.use("/user/data", RouterIndex);
// app.use(RouterIndex);

// app.use("/user", RouterIndex);
// app.use("user/data", RouterIndex);
/**
        "/" + "/" + "//" => "/"
        "/" + "saludo" => "//saludo" => "/saludo"
        "/" + "/saludo/:nombre" = "//saludo/:nombre => "/saludo:nombre"

        "/user" + "/saludo" = "/user/saludo"
        "/user/data" + "/saludo" = "/user/data/saludo"
 */

app.listen(3000, () => {
    console.log("Servidor escuchando en http://localhost:3000");
});
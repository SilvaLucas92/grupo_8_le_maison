const express= require ('express');
const app = express();
const path = require ('path');

//servidor
app.listen(8000,() =>
    console.log('Servidor corriendo en el puerto 8000'));

//archivos public
app.use(express.static("public"));

//EJS
app.set("view engine", "ejs");

//routes
const mainRoutes = require("./routes/mainRoute.js");
app.use("/", mainRoutes);

const userRoutes = require("./routes/userRoutes.js");
app.use("/user", userRoutes);

const productRoutes = require("./routes/productRoutes.js");
app.use("/product", productRoutes);




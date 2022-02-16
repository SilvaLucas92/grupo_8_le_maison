const express= require ('express');
const app = express();
const path = require ('path');
const session = require('express-session');

//servidor
app.listen(8000,() =>
    console.log('Servidor corriendo en el puerto 8000'));

//archivos public
app.use(express.static("public"));

//EJS
app.set("view engine", "ejs");

//req.body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}));

//method-override (put, delete)

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

//routes
const mainRoutes = require("./routes/mainRoutes");
app.use("/", mainRoutes);

const userRoutes = require("./routes/userRoutes");
app.use("/user", userRoutes);

const productRoutes = require("./routes/productRoutes");
app.use("/product", productRoutes);





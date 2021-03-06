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
//cookie
const cookieParser = require('cookie-parser');
app.use(cookieParser());

//method-override (put, delete)

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const userLogged = require('./middlewares/userLogged');
app.use(userLogged);

//routes
const mainRoutes = require("./routes/mainRoutes");
app.use("/", mainRoutes);

const userRoutes = require("./routes/userRoutes");
app.use("/user", userRoutes);

const productRoutes = require("./routes/productRoutes");
app.use("/product", productRoutes);

//api routes
const apiProductsRoutes = require('./routes/apiProductsRoutes');
app.use('/api', apiProductsRoutes);

const apiUsersRoutes = require('./routes/apiUsersRoutes');
app.use('/api', apiUsersRoutes)




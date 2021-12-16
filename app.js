const express= require ('express');
const app = express();
const path = require ('path');

app.listen(8000,() =>
    console.log('Servidor corriendo en el puerto 8000'));

app.use(express.static(path.resolve(__dirname, "public")));

app.get('/', (req, res) =>{
    let htmlPath = path.resolve (__dirname, 'views/home.html');
    res.sendFile(htmlPath);
})

app.get('/productCart', (req, res) =>{
    let htmlPath1 = path.resolve (__dirname, 'views/productCart.html');
    res.sendFile(htmlPath1);
})
app.get("/login", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "views/login.html"))
});

app.get("/register",(req, res)=>{
    res.sendFile(path.resolve(__dirname, "views/register.html"))
});

app.get('/productDetail', (req,res) => {
    let htmlPath2 = path.resolve (__dirname, 'views/productDetail.html');
    res.sendFile (htmlPath2)
})
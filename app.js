const express= require ('express');
const app = express();
const path = require ('path');

app.listen(8000,() =>
    console.log('servidor corriendo en el puerto 8000'));
app.get('/', (req, res) =>{
    let htmlPath = path.resolve (__dirname, 'views/home.html');
    res.sendFile(htmlPath);
})
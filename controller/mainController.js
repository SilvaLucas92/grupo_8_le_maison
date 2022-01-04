const productList = [
    {
        name: 'Escritorio',
        description: 'Moderno y práctico escritorio, con estilo vintage, inspirador de comodidad y confort, Fabricado con madera de cedro.',
        price: '$8900',
        size: 'con medidas: Alto: 70cm, Ancho: 50cm, Profundidad: 40cm.',
    },
    {
        name: 'Espejo',
        description: 'espejito',
        price: '$4800',
        size: 'con medidas: Alto: 70cm, Ancho: 120cm.' ,
        
    },
    {
        name: 'Biblioteca',
        description: 'kyufly',
        price: '$15000',
        size: 'con medidas: Alto:  , Ancho:  , Profundidad:  .',
        
    },
    {
        name: 'Sillon',
        description: 'jhdfgsuhdofi',
        price: '$32000',
        size: 'con medidas: Alto:  , Ancho:  , Profundidad:  .',
        
    },
    {
        name: 'Acolchado',
        description: 'jhdfgsuhdofi',
        price: '$3900',
        size: 'con medidas: Alto:  , Ancho:  , Profundidad:  .',
        
    },
    {
        name: 'Mesa Ratona',
        description: 'jhdfgsuhdofi',
        price: '$24300',
        size: 'con medidas: Alto:  , Ancho:  , Profundidad:  .',
        
    }
];

const controller = {
    home: (req, res) => {
        return res.render('home',
        {
            productList
        });
    },
};

module.exports = controller;

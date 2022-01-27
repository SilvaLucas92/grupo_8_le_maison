const controlador = {
    browse: (req, res) =>{
        res.render('../views/products/products.ejs', {
            list: productsData
        });
    },
    cart: (req, res) =>{
        res.render('../views/products/productCart');
    },
    
    addCart: (req, res) => {
		const id = Number(req.params.id); 
		const productFind = productsData.find(oneProduct => oneProduct.id === id);
		return res.render('../views/products/productCart', {
			theProduct: productFind
		});
    } ,

    detail:  (req,res) => {
		const id = Number(req.params.id); 
		const productFind = productsData.find(oneProduct => oneProduct.id === id);
		return res.render('../views/products/productDetail', {
			theProduct: productFind
		});
    },

    create: (req, res) =>{
        res.render('../views/products/newProduct');
    },
    
    add: (req, res) => {
        const idGenerator = () => {
            const lastProduct = productsData[productsData.length -1];
            const newId = lastProduct.id;   
            return newId  + 1;
        } 

        productsData.push ({   
            id: idGenerator(),
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            category: req.body.category
        })

        fs.writeFileSync(productsPath, JSON.stringify(productsData, null, ' '));
        return res.redirect('/product')
    },

    edit: (req, res) => {
        const id = Number(req.params.id);
        const productFind = productsData.find(oneProduct=>oneProduct.id===id);
        res.render('../views/products/modProduct', {
            theProduct: productFind
        });
    },

    update:(req, res) => {
        const id = Number(req.params.id);
        const updateProduct = productsData.map(oneProduct => {
            if (oneProduct.id === id){
                return{     
                    ...oneProduct,
                    name: req.body.name,
                    description: req.body.description,
                    price: req.body.price,
                    category: req.body.category
                }
            }
            return oneProduct;
        });
        fs.writeFileSync(productsPath, JSON.stringify(updateProduct, null, ' '));
        return res.redirect('/product');
    },

    delete: (req, res) => {
        const id = Number(req.params.id);
        const productsArrayFiltered = productsData.filter(oneProduct => oneProduct.id !== id);
        fs.writeFileSync(productsPath, JSON.stringify(productsArrayFiltered, null, ' '));
        return res.redirect('/product'); 
    }
};

module.exports = controlador;
const db = require ('../database/models');
const { Op } = require("sequelize");

const controller = {    
    index: async (req, res) => {
        const allPdts = await db.Product.findAll( {include: ['category','materials', 'colors']});
        const countCatMesas = await db.Product.count({ where: { cat_id: 1}});
        const countCatEscritorios = await db.Product.count({ where: { cat_id: 2}});
        const countCatSillas = await db.Product.count({ where: { cat_id: 3}});
        const countCatSillones = await db.Product.count({ where: { cat_id: 4}});
        const countCatEstanterias = await db.Product.count({ where: { cat_id: 5}});
        const countAllCategories = await db.Category.count();
        res.status(200).json({
            count: allPdts.length,
            lastPdtInDB: {
                lastPdtInDB: allPdts[allPdts.length - 1],
                image: allPdts[allPdts.length - 1].image? '/images/' + allPdts[allPdts.length - 1].image : ''
            },
            countAllCat: countAllCategories,
            countByCat: {
                mesas: countCatMesas,
                escritorios: countCatEscritorios,
                sillas: countCatSillas,
                sillones: countCatSillones,
                estanterias:countCatEstanterias
            },
            data: allPdts,
            status: 200
        })
    },
    detail: (req, res) => {
        let id = req.params.id
        db.Product
            .findByPk(id, {
                include: ['materials', 'colors'],
                raw: true,
                nest: true
                })
            .then(product => {
            return res.status(200).json({
                data: product,
                status: 200
            })
        })
    }
}
module.exports = controller;

const db = require ('../database/models');
const { Op } = require("sequelize");

const controller = {    
    index: (req, res) => {
        db.Product
            .findAll({include: ['category','materials', 'colors']})
            .then(movies => {
                return res.status(200).json({
                    count: movies.length,
                    data: movies,
                    status: 200
                })
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
        .then(movie => {
            return res.status(200).json({
                data: movie,
                status: 200
            })
        })
    }
}
module.exports = controller;

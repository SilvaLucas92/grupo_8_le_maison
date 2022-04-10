const db = require ('../database/models');
const { Op } = require("sequelize");

const controller = {
    index: async (req, res) => {
        const allUsers = await db.User.findAll();
        delete allUsers.password;
        return res.status(200).json({
            count: allUsers.length,
            data: allUsers
        })
    },
    detail: async (req, res) => {
        const id =  req.params.id;
        const oneUser = await db.User.findByPk(id)
        delete oneUser.password;
        return res.status(200).json({
            data: oneUser
        })
    }
};

module.exports = controller;
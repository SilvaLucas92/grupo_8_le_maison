const {User} = require ('../database/models');
const { Op } = require("sequelize");

const controller = {
    index: async (req, res) => {
        const allUsers = await User.findAll();
        delete allUsers.password;
        return res.status(200).json({
            count: allUsers.length,
            data: allUsers
        })
    },
    detail: async (req, res) => {
        const id =  req.params.id;
        const oneUser = await User.findByPk(id)
        delete oneUser.password;
        return res.status(200).json({
            data: oneUser
        })
    },
    delete: async (req, res) => {
        const userDeleted = await User.destroy({
            where: { id: req.params.id }
        });
        if (userDeleted) {
            return res.status(200).json({
                message: 'User deleted'
            })
        } else {
            return res.status(500).json({
                message: 'User not delete'
            })
        }
    }
};

module.exports = controller;
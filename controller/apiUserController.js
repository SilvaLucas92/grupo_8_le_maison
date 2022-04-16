const {User} = require ('../database/models');
const { Op } = require("sequelize");

const controller = {
    index: async (req, res) => {
        const allUsers = await User.findAll();
        delete allUsers.password;
        return res.status(200).json({
            count: allUsers.length,
            users: allUsers
        })
    },
    detail: async (req, res) => {
        const id =  req.params.id;
        const oneUser = await User.findByPk(id)
        delete oneUser.password;
        return res.status(200).json({
            user: oneUser
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
    },
    store: async (req, res) => {
        const user = await User
            .create(req.body)
            .then(user => {
            return res.status(200).json({
                user: user,
                message: 'Successfully created'
            })
        })
    },
};

module.exports = controller;
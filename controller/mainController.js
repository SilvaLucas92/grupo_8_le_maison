

const controller = {
    home: (req, res) => {
        return res.render('home',
        {
            productList
        });
    },
};

module.exports = controller;

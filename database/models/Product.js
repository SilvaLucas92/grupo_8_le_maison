module.exports = (sequelize, DataTypes) => {

    const Product = sequelize.define('Product', {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        image: DataTypes.STRING,
        price: DataTypes.DECIMAL(8,2),
        cat_id: DataTypes.INTEGER
    }, {
        tableName: 'products',
    });

    Product.associate = (models) => {
        Product.belongsTo(models.Category,
            {as: 'category',
            foreignKey: 'cat_id'})
    };

    return Product;
}
module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(255)
        },
        description: {
            type: dataTypes.STRING(255)
        },
        image: {
            type: dataTypes.INTEGER
        },
        price: {
            type: dataTypes.DECIMAL(8,2)
        },
        cat_id: {
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: 'products',
    };
    const Product = sequelize.define(alias, cols, config);

    Product.associate = (models) => {
        Product.belongsTo(models.Category,
            {as: 'category',
            foreignKey: 'cat_id'})
    };

    return Product;
}
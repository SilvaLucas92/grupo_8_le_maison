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
        timestamp: false
    };
    const Product = sequelize.define(alias, cols, config);

    Product.associate = (models) => {

        Product.belongsTo(models.Category, { 
            as: 'category',
            foreignKey: 'cat_id'
        });

        Product.belongsToMany(models.Material, {
            as:'materials',
            through: 'pdt_materials',
			foreignKey: "pdt_id",
			otherKey: "materials_id",
            timestamps: false
        });

        Product.belongsToMany(models.Color, {
            as: 'colors',
            through: 'pdt_colors',
            foreignKey: "pdt_id",
            otherKey: "colors_id",
            timestamps: false
        });

    };

    return Product;
}
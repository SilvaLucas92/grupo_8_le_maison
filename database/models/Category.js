module.exports = (sequelize, dataTypes) => {
    let alias = 'Category';
    let cols = {
        id:  {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(255)
        }
    };
    let config = {
        tableName: 'categories'
    };

    const Category = sequelize.define(alias, cols, config);

    Category.associate = models => {
        Category.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'cat_id'
        });  
    }
    return Category;  
}
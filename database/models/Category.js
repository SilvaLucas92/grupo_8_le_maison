module.exports = (sequelize, DataTypes) => {

    const Category = sequelize.define('Category', {
        
        name: DataTypes.STRING

    }, {
        tableName: 'categories'
    });

    Category.associate = models => {
        Category.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'cat_id'
        });  
    }
    return Category;  
}
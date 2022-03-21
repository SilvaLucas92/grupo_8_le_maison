module.exports = (sequelize, dataTypes) => {
    let alias = 'Color';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(255)
        }
    };
    let config = {
        tableName: 'colors',
        timestamp: false
    }
    const Color = sequelize.define(alias, cols, config);

    Color.associate = models => {
        Color.belongsToMany(models.Product, {
            as: 'products',
            through: 'pdt_colors',
			foreignKey: "colors_id",
			otherKey: "pdt_id",
            timestamps: false
        })
    }
    return Color;
}
module.exports = (sequelize, dataTypes) => {
    let alias = 'Material';
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
        tableName: 'materials',
        timestamp: false
    }
    const Material = sequelize.define(alias, cols, config);

    Material.associate = (models) => {
        Material.belongsToMany(models.Product, {
            as: 'products',
            through: 'pdt_materials',
			foreignKey: "materials_id",
			otherKey: "pdt_id",
            timestamps: false
        })
    }
    return Material;
}
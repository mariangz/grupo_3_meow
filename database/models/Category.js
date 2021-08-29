module.exports = (sequelize, DataTypes) => {
    let alias = "Category";
    let cols = {
        category_id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING,
        }
    };

    let config = {
        tableName: "Categories",
        timestamps: false,
    };

    const Category = sequelize.define(alias, cols, config);

    Category.associate = (models) => {
        Category.belongsToMany(
            models.Product, {
                through: 'productCategory',
                otherKey: 'category_id',
                foreignKey: 'product_id',
                as: 'products',
                timestamps: false
            }
        );
    }
    return Category;
}
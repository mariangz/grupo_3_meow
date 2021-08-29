module.exports = (sequelize, DataTypes) => {
    let alias = "ProductCategory";
    let cols = {
        productCategory_id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        categoryId: {
            type: DataTypes.INTEGER,
        },
        productId: {
            type: DataTypes.INTEGER,
        }
    };
    let config = {
        tableName: "ProductsCategories",
        timestamps: false,
    };

    const ProductCategory = sequelize.define(alias, cols, config);;
    return ProductCategory;
}
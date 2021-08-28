module.exports = (sequelize, DataTypes) => {
    let alias = "ProductCategory";
    let cols = { 
        productCategory_id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        category_id:{
            type: DataTypes.INTEGER,
        },
        product_id:{
            type: DataTypes.INTEGER,
            }
        };
    let config = { 
        tableName: "ProductsCategories",
        timestamps: false,
    };

    const ProductCategory = sequelize.define(alias, cols, config);    
    ;
    return ProductCategory;
}

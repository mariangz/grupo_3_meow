module.exports = (sequelize, DataTypes) => {
    let alias = "Product";
    let cols = { 
        product_id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        productName: {
            allowNull: false,
            type: DataTypes.STRING
        } ,
        productPrice:{
            type: DataTypes.decimal(10,2)
        },
        shortDescription:{
            type: DataTypes.STRING,
        } ,
        nutritionalDetail: {
            type: DataTypes.STRING,
        },
        productImage:{
            type: DataTypes.STRING,
            },
    };
    let config = { 
        tableName: "Products",
        timestamps: false,
    }

    const Product = sequelize.define(alias, cols, config);    
    ;
    return Product;
}

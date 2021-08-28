module.exports = (sequelize, DataTypes) => {
    let alias = "Order";
    let cols = { 
        order_id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        user_id: {
            type: DataTypes.INTEGER
        } ,
        product_id:{
            type: DataTypes.INTEGER
        }
         ,
        payment_id:{
            type: DataTypes.INTEGER,
        } 
            };

    let config = { 
        tableName: "Orders",
        timestamps: false,
    };

    const Order = sequelize.define(alias, cols, config);    
    ;
    return Order;
}

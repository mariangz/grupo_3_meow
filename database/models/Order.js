module.exports = (sequelize, DataTypes) => {
    let alias = "Order";
    let cols = {
        order_id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        userId: {
            type: DataTypes.INTEGER
        },
        productId: {
            type: DataTypes.INTEGER
        },
        paymentId: {
            type: DataTypes.INTEGER,
        }
    };

    let config = {
        tableName: "Orders",
        timestamps: false,
    };

    const Order = sequelize.define(alias, cols, config);;
    return Order;
}
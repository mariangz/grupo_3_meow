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
        },
        product_id: {
            type: DataTypes.INTEGER
        },
        payment_id: {
            type: DataTypes.INTEGER,
        }
    };

    let config = {
        tableName: "Orders",
        timestamps: false,
    };

    const Order = sequelize.define(alias, cols, config);

    Order.associate = (models) => {
        Order.belongsTo(models.Payment, {
            as: 'payment',
            foreignKey: 'payment_id'
        })
        Order.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'user_id'
        })
        Order.belongsTo(models.Product, {
            as: 'product',
            foreignKey: 'product_id',
        })
    }
    return Order;
}
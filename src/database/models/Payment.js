module.exports = (sequelize, DataTypes) => {
    const alias = "Payment";
    const cols = {
        payment_id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.INTEGER,
        }
    };

    const config = {
        tableName: "payments",
        timestamps: false,
    };

    const Payment = sequelize.define(alias, cols, config);;
    return Payment;
}
module.exports = (sequelize, DataTypes) => {
    let alias = "Payment";
    let cols = { 
        payment_id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        amount:{
            type: DataTypes.INTEGER,
        } 
            };

    let config = { 
        tableName: "Payments",
        timestamps: false,
    };

    const Payment = sequelize.define(alias, cols, config);    
    ;
    return Payment;
}

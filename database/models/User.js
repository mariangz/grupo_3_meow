module.exports = (sequelize, DataTypes) => {
    let alias = "User";
    let cols = {
        user_id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        confirmPassword: {
            type: DataTypes.STRING,
        },
        image: {
            type: DataTypes.STRING,
        },
        role_id: {
            type: DataTypes.INTEGER,
        },
    };
    let config = {
        tableName: "Users",
        timestamps: false,
    }

    const User = sequelize.define(alias, cols, config);

    User.associate = (models) => {
        User.belongsTo(models.Role, {
            as: 'role',
            foreignKey: 'role_id'
        })
        User.hasMany(models.Order, {
            as: 'orders',
            foreignKey: 'user_id',
        })
    }

    return User;
}
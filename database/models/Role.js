module.exports = (sequelize, DataTypes) => {
    let alias = "Role";
    let cols = {
        role_id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING,
        }
    };

    let config = {
        tableName: "Roles",
        timestamps: false,
    };

    const Role = sequelize.define(alias, cols, config);

    Role.associate = (models) => {
        Role.hasMany(models.User, {
            as: 'role_id',
        })
    }

    return Role;
}
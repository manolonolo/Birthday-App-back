const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('user', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            unique: true,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
              isEmail: true,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        birthdate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        imageURL: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: 'https://media.istockphoto.com/vectors/black-linear-photo-camera-like-no-image-available-vector-id1055079680?k=6&m=1055079680&s=170667a&w=0&h=ZYi91hhX3U00QK-aVuBLlFGqNAsTrO_LtuhUqMJfxWY='
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        google: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }

    },
    {timestamps: false});
}
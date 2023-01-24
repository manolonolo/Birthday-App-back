const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('gift', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        imageURL: {
            type: DataTypes.STRING,
            defaultValue: 'https://media.istockphoto.com/vectors/black-linear-photo-camera-like-no-image-available-vector-id1055079680?k=6&m=1055079680&s=170667a&w=0&h=ZYi91hhX3U00QK-aVuBLlFGqNAsTrO_LtuhUqMJfxWY='
        },
        category: {
            type: DataTypes.ENUM('Food', 'Gift Cards', 'Electronics', 'Health & Beauty', 'Clothing & Accessories', 'Miscelaneous'),
            allowNull: false
        },
        isCombo: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }

    },{timestamps: false});
}
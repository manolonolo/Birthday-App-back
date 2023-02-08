const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('gift', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.TEXT
        },
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
        imgURL: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        category: {
            type: DataTypes.ENUM('Food', 'Gift Cards', 'Electronics', 'Health & Beauty', 'Clothing & Accessories', 'Miscelaneous'),
            allowNull: false
        },
        isCombo: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }

    },{timestamps: false});
}
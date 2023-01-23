const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('date', {
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        eventName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {timestamp: false});
}

const { Sequelize, ModelStatic, DataTypes } = require('sequelize');

/**
 * Constructeur du Modele Format
 * @param {Sequelize} sequelize
 * @returns {ModelStatic<any>}
 */

module.exports = (sequelize) => {
    const Format = sequelize.define('Format', {
        name : {
            type : DataTypes.STRING(50),
            allowNull : false,
            unique : 'UK_Format_Name'
        }
    }, {
        tableName : 'Format'
    });

    return Format;
}
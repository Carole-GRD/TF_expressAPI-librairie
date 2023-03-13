

const { Sequelize, ModelStatic, DataTypes } = require('sequelize');

/**
 * Constructeur du Modele Author
 * @param {Sequelize} sequelize
 * @returns {ModelStatic<any>}
 */

module.exports = (sequelize) => {
    const Author = sequelize.define('Author', {
        firstname : {
            type : DataTypes.STRING,
            allowNull : false,
            validate : {
                isAlpha : true,
                notNull : true,
                notEmpty : true
            }
        },
        lastname : {
            type : DataTypes.STRING,
            allowNull : false,
            validate : {
                isAlpha : true,
                notNull : true,
                notEmpty : true
            }
        },
        birthdate : {
            type : DataTypes.DATE,
            allowNull : true
        },
        biography : {
            type : DataTypes.TEXT,
            allowNull : true
        },
        photo : {
            type : DataTypes.STRING,
            allowNull : true,
            validate : {
                notEmpty : true,
            }
        }
    }, {
        tableName : 'Author'
    });

    return Author;
}
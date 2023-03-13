

const { Sequelize, ModelStatic, DataTypes } = require('sequelize');

/**
 * Constructeur du Modele Publisher
 * @param {Sequelize} sequelize
 * @returns {ModelStatic<any>}
 */

module.exports = (sequelize) => {
    const Publisher = sequelize.define('Publisher', {
        name : {
            type : DataTypes.STRING(100),
            allowNull : false,
            unique : 'UK_Publisher_Name'
        },
        street : {
            type: DataTypes.STRING,
            allowNull: true
        },
        number : {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                isInt : {
                    msg : 'Le numéro de la rue doit être un nombre entier'
                },
                min: {
                    args: [1],
                    msg: 'Le numéro de la rue doit être supérieur ou égal à 1'
                }
            }
        },
        city : {
            type: DataTypes.STRING,
            allowNull: true
        },
        postalCode : {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                customValidator(value) {
                    if (( this.delivery_country === 'Belgium' ||
                            this.delivery_country === 'Belgique' )
                            && !/^\d{4}$/.test(value)) {
                        throw new Error('Le code postal doit contenir 4 chiffres');
                    }
                }
            }
        },
        country: {
            type: DataTypes.STRING,
            allowNull: true
          },
        website: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isUrl: true
            }
        }
    }, {
        tableName : 'Publisher'
    });

    return Publisher;
}
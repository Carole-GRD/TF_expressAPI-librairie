

const { Sequelize, ModelStatic, DataTypes } = require('sequelize');

/**
 * Constructeur du Modele Order
 * @param {Sequelize} sequelize
 * @returns {ModelStatic<any>}
 */

module.exports = (sequelize) => {
    const Order = sequelize.define('Order', { 
        status : {
            type: DataTypes.ENUM('En attente', 'Terminée'),
            allowNull: false,
            validate: {
                isIn: {
                    args: [['En attente', 'Terminée']],
                    msg: "Le statut de la commande doit être 'En attente' ou 'Terminée'"
                },
                customValidator(value) {
                    if (this.payment_status === 'Payé' && this.delivery_status === 'expédiée') {
                        return value = 'Terminée'
                    }
                }
            }
        },
        total : {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                isFloat: true,
                min: {
                    args: [0],
                    msg: 'Le total de la commande doit être supérieur ou égal à 0'
                }
            }
        },
        delivery_street : {
            type: DataTypes.STRING,
            allowNull: false
        },
        delivery_number : {
            type: DataTypes.INTEGER,
            allowNull: false,
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
        delivery_city : {
            type: DataTypes.STRING,
            allowNull: false
        },
        delivery_postalCode : {
            type: DataTypes.STRING,
            allowNull: false,
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
        delivery_country : {
            type: DataTypes.STRING,
            allowNull: false
        },
        payment_method : {
            type : DataTypes.ENUM,
            values : ['Visa', 'Maestro', 'Payconiq', 'PayPal'],
            allowNull : false,
            validate : {
                isIn : [['Visa', 'Maestro', 'Payconiq', 'PayPal']] 
            }
        },
        payment_status : {
            type : DataTypes.ENUM,
            values : ['Payé', 'En attente', 'Refusé', 'Annulé'],
            allowNull: false,
            validate: {
                isIn: {
                    args: [['Payé', 'En attente', 'Refusé', 'Annulé']],
                    msg: "Le statut de paiement doit être 'Payé', 'En attente', 'Refusé' ou 'Annulé'"
                }
            }
        },
        delivery_status : {
            type : DataTypes.ENUM,
            values : ['en cours de traitement', 'en cours de préparation', 'prêt pour expédition', 'expédiée'],
            allowNull : false,
            validate : {
                isIn: {
                    args: [['en cours de traitement', 'en cours de préparation', 'prêt pour expédition', 'expédiée']],
                    msg: "Le statut de paiement doit être 'en cours de traitement', 'en cours de préparation', 'prêt pour expédition' ou 'expédiée'"
                }
            }
        }
        // user_id : {} 
        // ↑ foreign key qui pointe vers la primary key de la table "User"
        // ATTENTION : la relation PK-FK est définie dans le fichier index.js du dossier models
    }, {
        tableName : 'Order'
    });

    return Order;
}
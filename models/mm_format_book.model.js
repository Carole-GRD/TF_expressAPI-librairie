const { Sequelize, ModelStatic, DataTypes } = require('sequelize');


/**
 * Constructeur du Modele MM_Format_Book
 * @param {Sequelize} sequelize
 * @returns {ModelStatic<any>}
 */

module.exports = (sequelize) => {
    const MM_Format_Book = sequelize.define('MM_Format_book', {
        price :{
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                isFloat: true, 
                min: {
                    args: [0], 
                    msg: "Le prix ne peut pas être négatif",
                },
            },
        },
        quantity : {
            type : DataTypes.INTEGER,
            allowNull : false,
            validate : {
                isInt : {
                    msg : 'Le nombre de livres disponibles doit être un nombre entier'
                },
                min : {
                    args : [0],
                    msg : 'Le nombre de livres disponibles doit être positif'
                }
            }
        }
    }, {
        tableName : 'MM_Format_Book'
    });

    return MM_Format_Book;
}
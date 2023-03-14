

const { Sequelize, ModelStatic, DataTypes } = require('sequelize');

/**
 * Constructeur du Modele Book
 * @param {Sequelize} sequelize
 * @returns {ModelStatic<any>}
 */

module.exports = (sequelize) => {
    const Book = sequelize.define('Book', {
        
        ISBN : {
            type: DataTypes.STRING,
            allowNull: false,
            unique : 'UK_Book_ISBN', 
            validate: {
                customValidator(value) {
                    const isbn10 = /^\d{10}$/;
                    const isbn13 = /^\d{13}$/;
                    if (!isbn10.test(value) && !isbn13.test(value)) {
                        throw new Error('L\'ISBN doit contenir 10 ou 13 chiffres');
                    }
                }
            },
        },
        title : {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true, 
            },
        },
        description : {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true, 
            },
        },
        publication_date : {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                isDate: true, 
                isNotInTheFuture(value) {
                    if (new Date(value) > new Date()) {
                        throw new Error('La date de publication ne peut pas être dans le futur');
                    }
                }
            },
        },
        cover : {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: true, 
            },
        }

        // genre_id : {} 
        // publisher_id : {} 
        // ↑ foreign key qui pointe vers la primary key de la table "User"
        // ATTENTION : les relations PK-FK sont définies dans le fichier index.js du dossier models
    }, {
        tableName : 'Book'
    });

    return Book;
}
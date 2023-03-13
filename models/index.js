const { Sequelize } = require('sequelize');

const { DB_SERVER, DB_DATABASE, DB_USERNAME, DB_PASSWORD } = process.env;


// Initialisation Sequelize
const sequelize = new Sequelize({
    host : DB_SERVER,
    dialect : 'mssql'
})

// Création de l'objet db
const db = {};
// Ajout de l'instance sequelize créée précédemment sur l'objet db
db.sequelize = sequelize;


// Liaison modèles <--> db


// Définition des relations


// export de db
module.exports = db;

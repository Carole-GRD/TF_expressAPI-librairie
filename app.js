// Configuration des variables d'environnement
require('dotenv').config();


// Import d'express
const express = require('express');


// -----------------------
// Import des cors
// -----------------------


// Importdu middleware express-async-errors
require('express-async-errors');


// Création du serveur
const app = express();


// -----------------------
// Utilisation des cors
// -----------------------


// -----------------------
// Import db
// -----------------------


// -----------------------
// Connection à la db
// -----------------------


// -----------------------
// Synchro db
// -----------------------


// -----------------------
// Middleware app-lvl
// -----------------------


// Router
const router = require('./routes');
app.use('/api', router);


// Ecoute server
app.listen(process.env.PORT, () => {
    console.log(`Server API started on port : ${process.env.PORT}`);
});




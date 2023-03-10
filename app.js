// Configuration des variables d'environnement
require('dotenv').config();


// Import d'express
const express = require('express');


// Importdu middleware express-async-errors
require('express-async-errors');


// Création du serveur
const app = express();


// Ecoute server
app.listen(process.env.PORT, () => {
    console.log(`Server API started on port : ${process.env.PORT}`);
});






const genreRouter = require('express').Router();

genreRouter.route('/')
    .get((req, res) => res.sendStatus(501))
    .post((req, res) => res.sendStatus(501))

genreRouter.route('/:id')
    .get((req, res) => res.sendStatus(501))
    .put((req, res) => res.sendStatus(501))
    .delete((req, res) => res.sendStatus(501))

module.exports = genreRouter;
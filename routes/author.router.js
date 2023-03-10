

const authorRouter = require('express').Router();

authorRouter.route('/')
    .get((req, res) => res.sendStatus(501))
    .post((req, res) => res.sendStatus(501))

authorRouter.route('/:id')
    .get((req, res) => res.sendStatus(501))
    .put((req, res) => res.sendStatus(501))
    .delete((req, res) => res.sendStatus(501))

module.exports = authorRouter;
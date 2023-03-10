
const publisherRouter = require('express').Router();

publisherRouter.route('/')
    .get((req, res) => res.sendStatus(501))
    .post((req, res) => res.sendStatus(501))

publisherRouter.route('/:id')
    .get((req, res) => res.sendStatus(501))
    .put((req, res) => res.sendStatus(501))
    .delete((req, res) => res.sendStatus(501))

module.exports = publisherRouter;
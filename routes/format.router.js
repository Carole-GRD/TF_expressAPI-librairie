

const formatRouter = require('express').Router();

formatRouter.route('/')
    .get((req, res) => res.sendStatus(501))
    .post((req, res) => res.sendStatus(501))

formatRouter.route('/:id')
    .get((req, res) => res.sendStatus(501))
    .put((req, res) => res.sendStatus(501))
    .delete((req, res) => res.sendStatus(501))


module.exports = formatRouter;
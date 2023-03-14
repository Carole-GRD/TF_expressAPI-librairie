

const orderRouter = require('express').Router();

orderRouter.route('/')
    .get((req, res) => res.sendStatus(501))
    .post((req, res) => res.sendStatus(501))

orderRouter.route('/:id')
    .get((req, res) => res.sendStatus(501))
    .put((req, res) => res.sendStatus(501))
    .delete((req, res) => res.sendStatus(501))
    

module.exports = orderRouter;
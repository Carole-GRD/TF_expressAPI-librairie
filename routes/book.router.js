

const bookRouter = require('express').Router();

bookRouter.route('/')
    .get((req, res) => res.sendStatus(501))
    .post((req, res) => res.sendStatus(501))

bookRouter.route('/:id')
    .get((req, res) => res.sendStatus(501))
    .put((req, res) => res.sendStatus(501))
    .delete((req, res) => res.sendStatus(501))

bookRouter.route('/:id/format')                 
    .get((req, res) => res.sendStatus(501))

bookRouter.route('/genre/:id')
    .get((req, res) => res.sendStatus(501))


module.exports = bookRouter;
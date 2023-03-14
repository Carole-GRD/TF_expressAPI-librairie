const formatController = require('../controllers/format.controller');


const formatRouter = require('express').Router();

formatRouter.route('/')
    .get(formatController.getAll)
    .post(formatController.create)

formatRouter.route('/:id')
    .get(formatController.getById)
    .put(formatController.update)
    .delete(formatController.delete)

formatRouter.route('/book/:id')
    .get(formatController.getByBook)

module.exports = formatRouter;
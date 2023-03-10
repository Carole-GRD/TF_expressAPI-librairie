const bookController = require('../controllers/book.controller');


const bookRouter = require('express').Router();

bookRouter.route('/')
    .get(bookController.getAll)
    .post(bookController.create)

bookRouter.route('/:id')
    .get(bookController.getById)
    .put(bookController.update)
    .delete(bookController.delete)

bookRouter.route('/author/:id')
    .get(bookController.getByAuthor)

bookRouter.route('/genre/:id')
    .get(bookController.getByGenre)


module.exports = bookRouter;
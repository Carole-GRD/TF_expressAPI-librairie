const bookController = require('../controllers/book.contgroller');


const bookRouter = require('express').Router();

bookRouter.route('/')
    .get(bookController.getAll)
    .post(bookController.create)

bookRouter.route('/:id')
    .get(bookController.getById)
    .put(bookController.update)
    .delete(bookController.delete)

bookRouter.route('/genre/:id')
    .get(bookController.getByGenre)


module.exports = bookRouter;
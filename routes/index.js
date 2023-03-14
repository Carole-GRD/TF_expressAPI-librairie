const authorRouter = require('./author.router');
const bookRouter = require('./book.router');
const formatRouter = require('./format.router');
const genreRouter = require('./genre.router');
const orderRouter = require('./order.router');
const publisherRouter = require('./publisher.router');
const userRouter = require('./user.router');


const router = require('express').Router();

router.use('/author', authorRouter);
router.use('/book', bookRouter);
router.use('/format', formatRouter);
router.use('/genre', genreRouter);
router.use('/order', orderRouter);
router.use('/publisher', publisherRouter);
router.use('/user', userRouter);


module.exports = router;
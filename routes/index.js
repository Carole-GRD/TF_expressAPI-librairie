

const router = require('express').Router();

router.use('/author', (req, res) => res.sendStatus(501));
router.use('/book', (req, res) => res.sendStatus(501));
router.use('/genre', (req, res) => res.sendStatus(501));
router.use('/order', (req, res) => res.sendStatus(501));
router.use('/publisher', (req, res) => res.sendStatus(501));
router.use('/user', (req, res) => res.sendStatus(501));


module.exports = router;
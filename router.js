const router = require('express').Router();
const userRouter = require('./routes/userRouter');
const restRouter = require('./routes/restaurantRouter');


router.use('/user', userRouter);
router.use('/rest', restRouter);


module.exports = router;
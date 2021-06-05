const router = require("express").Router();
const userRouter = require("./routes/userRouter");
const restRouter = require("./routes/restaurantRouter");
const bookingRouter = require("./routes/bookingRouter");

router.use("/user", userRouter);
router.use("/rest", restRouter);
router.use("/booking", bookingRouter);

module.exports = router;

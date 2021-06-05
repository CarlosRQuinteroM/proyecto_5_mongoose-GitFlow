const router = require("express").Router();
const bookingController = require("../controllers/bookingController");
const jwt = require("jsonwebtoken");
const admin = require("../middleware/admin.js");
const auth = require("../middleware/auth");

router.post("/", auth, async (req, res) => {
  try {
    const booking = req.body;
    res.json(await bookingController.createBooking(booking));
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
});

// admin
router.get("/", admin, async (req, res) => {
  try {
    res.json(await bookingController.findAllBookings());
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
});

// //, authenticate
// router.put("/",auth,async(req, res) => {
//     try {
//         const body = req.body;
//         res.json( await userController.modifyUser(body));
//     } catch (error) {
//         return res.status(500).json({
//             message: error.message
//         });
//     }
// });
//, authenticate/admin
router.delete("/", auth, async (req, res) => {
  try {
    const id = req.body.id;
    res.json(await bookingController.deleteBooking(id));
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
});

module.exports = router;

const router = require("express").Router();
const bookingController = require("../controllers/bookingController");
const jwt = require("jsonwebtoken");
const admin = require("../middleware/admin.js");
const auth = require("../middleware/auth");

// POST create Booking *
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

// auth GET  find all Bookings 
router.get("/", admin, async (req, res) => {
  try {

    res.json(await bookingController.findAllBookings());
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
});


router.get("/bookings",admin, async (req, res) => {
    try {
      const idRestaurante = req.body.id;
      res.json(await restController.findAllbookings(idRestaurante));
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      });
    }
  });
  
  router.get("/userbooking/:idUser", async(req, res) => {
    try {
        const id = req.params.idUser;
        res.json( await bookingController.findAllBookings(id));
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

//, authenticate/admin
router.delete("/", admin, async (req, res) => {
  try {
    const id = req.body.id;
    res.json(await bookingController.deleteBooking(id));
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
});
//,auth

  router.delete("/",auth, async (req, res) => {
    try {
      const id = req.body.id;
      const idRestaurante = req.body.idRestaurante;
      res.json(await restController.deleteBooking(id,idRestaurante));
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      });
    }
  });

module.exports = router;

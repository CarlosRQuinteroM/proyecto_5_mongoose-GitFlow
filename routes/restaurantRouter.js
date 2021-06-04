const router = require("express").Router();
const restController = require("../controllers/restController");
const admin = require("../middlewares/admin");
const auth = require("../middlewares/auth");

//GET - Return all Restaurants in the DB


router.get("/", async (req, res) => {
  try {
    res.json(await restController.findAllRests());
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
});

router.get("/bookings", async (req, res) => {
  try {
    const idRestaurante = req.body.id;
    res.json(await restController.findAllbookings(idRestaurante));
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
});

//POST - Creates a new chat Restaurant
// admin
router.post("/create", async (req, res) => {
  try {
    const rest = req.body;
    res.json(await restController.createRest(rest));
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
});

//,auth
router.post("/add", async (req, res) => {
  try {
    const data = req.body;
    res.json(await restController.addBooking(data));
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
});

// router.delete("/",auth, async (req, res) => {
//   try {
//     const idRestaurante = req.body.idRestaurante;
//     res.json(await restController.deleteBooking(id,idRestaurante));
//   } catch (err) {
//     return res.status(500).json({
//       message: err.message,
//     });
//   }
// });

// router.delete("/", async (req, res) => {
//   try {
//     const id = req.body.id;
//     const idRestaurante = req.body.idRestaurante;
//     res.json(await restController.deleteBooking(id,idRestaurante));
//   } catch (err) {
//     return res.status(500).json({
//       message: err.message,
//     });
//   }
// });

module.exports = router;

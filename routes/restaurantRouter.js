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



// delete restaurante  (admin)

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

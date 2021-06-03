const router = require("express").Router();
const restController = require("../controllers/restController");

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

router.delete("/", async (req, res) => {
  try {
    const id = req.body.id;
    res.json(await restController.deleteBooking(id));
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
});

module.exports = router;

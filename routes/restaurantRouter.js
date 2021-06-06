const router = require("express").Router();
const restController = require("../controllers/restController");
const admin = require("../middleware/admin.js");
const auth = require("../middleware/auth");

//GET - Return all Restaurants in the DB*

router.get("/", async (req, res) => {
  try {
    res.json(await restController.findAllRests());
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
});

//POST - Creates a new Restaurant
// admin *
router.post("/create",admin,async (req, res) => {
  try {
    const rest = req.body;
    res.json(await restController.createRest(rest));
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
});
// PUT modify Restaurants //admin*
router.put("/",admin, async (req, res) => {
  try {
    const data = req.body;
    res.json(await restController.modifyRest(data));
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});

// admin *

router.delete("/:id",admin,async (req, res) => {
  try {
    const id = req.params.id;
    res.json(await restController.deleteRest(id));
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
});


module.exports = router;

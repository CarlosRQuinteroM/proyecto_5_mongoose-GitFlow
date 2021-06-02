const router = require("express").Router();
const restController = require("../controllers/restController");

//GET - Return all Chats in the DB

router.get("/", async (req, res) => {
  try {
    res.json(await restController.findAllRooms());
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
});

//POST - Creates a new chat room

router.post("/", async (req, res) => {
  try {
    const room = req.body;
    res.json(await restController.createRest(rest));
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
});


router.post("/addReserva", async (req, res) => {
  try {
    const data = req.body;
    res.json(await restController.addReserva(data));
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

const router = require("express").Router();
const userController = require("../controllers/userController.js");
const admin = require("../middleware/admin");
const auth = require("../middleware/auth.js");

router.post("/", async (req, res) => {
  try {
    const user = req.body;
    res.json(await userController.createUser(user));
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const jwt = await userController.logMe(email, password);
    const token = jwt.token;
    const user = jwt.user;
    res.json({ token, user });
  } catch (err) {
    return res.status(401).json({
      message: err.message,
    });
  }
});
// admin
router.get("/", admin, async (req, res) => {
  try {
    res.json(await userController.findAllUsers());
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
});

// admin
router.get('/email',admin,async (req, res) => {   
    try{
        let data;
        if (req.body.email != undefined) data = await userController.getByEmail(req.body.email);
        else data = await userController.search(req.body);
        res.json(data);
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

//, authenticate
router.put("/", auth, async (req, res) => {
  try {
    const body = req.body;
    res.json(await userController.modifyUser(body));
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});
//, authenticate/admin
router.delete("/:id", auth, async (req, res) => {
  try {
    const id = req.params.id;
    res.json(await Controller.deleteUser(id));
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
});

module.exports = router;

const router = require('express').Router();
const userController = require('../controllers/userController');
const jwt = require('jsonwebtoken');
const admin = require("../middleware/admin");




router.post('/', async (req,res) => {
    try {
        const user = req.body;
        res.json(await userController.createUser(user))
    }catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
});

router.post('/login',async (req, res) => {
    try{
        const {email,password} = req.body;
        const jwt = await userController.logMe(email,password);
        const token = jwt.token;
        const user = jwt.user;
        res.json({token,user});
    } catch (err) {
        return res.status(401).json({
            message: err.message
        });
    }
});
// admin
router.get('/', async (req, res) => {
    try {
        res.json(await userController.findAllUsers())
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

//, authenticate
router.put("/", async(req, res) => {
    try {
        const body = req.body;
        res.json( await usersControllers.modifyUser(body));
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});
//, authenticate/admin
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        res.json(await usersControllers.deleteUser(id));
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

module.exports = router;
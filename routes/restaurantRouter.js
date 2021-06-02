const router = require('express').Router();
const restController = require('../controllers/restController');

router.get('/rest', async (req, res) => {
    try {
        res.json(await restController.findAllRests())
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

router.post('/', async (req,res) => {
    try {
        const user = req.body;
        res.json(await userController.createUser(user))
    }catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
})
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
//, authenticate
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
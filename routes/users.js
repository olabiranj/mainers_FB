const express = require('express');
const router = express.Router();

const apiController = require('../controllers/userController');

//user routes
router.post('/register', apiController.newUser);
router.post('/login', apiController.loginUser);
router.get('/getAll', apiController.getAllUsers);

module.exports = router;
const express = require('express');
// const { route } = require('express/lib/router');
const {registerUser} = require('../controllers/userControllers')
const router = express.Router();

// register
router.route('/').post(registerUser);

// login
// router.post('/login', asuthUser)

module.exports = router; 
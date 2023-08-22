const express = require('express');
const router = express.Router();

const LoginController = require('../app/controllers/LoginController')

// newsController.index


router.get('/',LoginController.login);

router.get('/secret',LoginController.secret);

router.post('/',LoginController.index);


module.exports = router
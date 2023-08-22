const express = require('express');
const router = express.Router();

const RegisterController = require('../app/controllers/RegisterController')

// newsController.index



router.get('/',RegisterController.index);

router.post('/store',RegisterController.store);


module.exports = router
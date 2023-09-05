const express = require('express');
const router = express.Router();

const RegisterController = require('../app/controllers/RegisterController')

// newsController.index


router.post('/store',RegisterController.store);

router.get('/',RegisterController.index);




module.exports = router
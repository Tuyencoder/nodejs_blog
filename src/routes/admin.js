const express = require('express');
const router = express.Router();

const Admin = require('../app/controllers/Admin')

// CourseController.index



router.get('/course/list',Admin.index);









module.exports = router
const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController')

// CourseController.index



router.get('/create',courseController.create);

router.post('/store',courseController.store);

router.get('/:slug',courseController.show);

router.get('/:id/edit',courseController.edit);

router.put('/:id',courseController.update);


router.get('/',courseController.index);






module.exports = router
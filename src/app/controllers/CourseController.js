const Course = require('./models/Course')
const {mongooseToObject} = require('../../../src/util/mongo')
class CourseController {



    index(req, res){

        res.send('details index')
    }
    //[GET] /course/:slug
   

    show(req, res,next){

        Course.findOne({ slug: req.params.slug })
            .then(course=>{
                res.render('courses/courseDetail',{course : mongooseToObject(course) })
            })
            .catch(next)

        // res.send('details index')
        
    }

    create(req, res,next){

        res.render('courses/createCourse');
        
    }

    async store(req, res,next){

        req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(req.body);
        await course.save()

        
        .then(res.redirect(''))
        .catch(next)
        
    }
    
}
module.exports = new CourseController;


const Course = require('./models/Course')
const {mutipleMongoseeToOject} = require('../../../src/util/mongo')
class CourseController {


    //GET /admin/course/list
    async index(req, res,next){

        try {
            Course.find({})
                .then(courses=> {
                    courses =  mutipleMongoseeToOject(courses);
                    res.render('admin/listCourses',{courses})
                })
                .catch(next);
        } catch (error) {
            console.log(error);
        }
    //[GET] /course/:slug
   

    


  
    
}}
module.exports = new CourseController;


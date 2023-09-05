const Course = require('./models/Course');
const {mutipleMongoseeToOject} = require('../../../src/util/mongo')
class SiteController {


    //[GET] /Home
    async index(req, res,next){

        try {
            const data = await Course.find({})
                .then(data=> {
                    data =  mutipleMongoseeToOject(data);
                    res.render('home',{data})
                })
                .catch(next);
        } catch (error){
            console.log(error);
        }
        
      
        // res.render('home')
    }

    search(req, res){

        res.render('search')
    }

    
}
module.exports = new SiteController;
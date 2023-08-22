const Users = require('./models/Users')
class RegisterController {


    index(req, res){

        res.render('register')
    }
    

    async store(req, res,next){

        const user = await Users.findOne({username : req.body.username})
        if(!user){
            await Users.create({ 
                username : req.body.username,
                password: req.body.password,
                email: req.body.email,
             })
             .then(data=>{
                res.json('dang ki thanh cong')
             })
        }
        else{
            res.status(404).json('dang ki that bai')
        }
        
         
        
        
    }
    
}
module.exports = new RegisterController;
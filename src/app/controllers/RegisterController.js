require('dotenv').config()
const Users = require('./models/Users')
const jwt = require('jsonwebtoken');
class RegisterController {


    index(req, res){

        res.render('register')
    }
    

    async store(req, res,next){
        //check user exists
        const user = await Users.findOne({username : req.body.username})

        //all good
        // create a new User
            if(!user){
            const newUser = await Users.create({ 
                username : req.body.username,
                password: req.body.password,
                email: req.body.email,
             })
             //return token
             const accessToken = jwt.sign({ userId: newUser._id }, 'PrivateKey', process.env.ACCESS_TOKEN_SECRET);

             res.json({
                success: true,
                message:"user created successfully",
                accessToken
             })
        }
        else{
            res.status(404).json('fail to create user')
        }
    }
}
module.exports = new RegisterController;
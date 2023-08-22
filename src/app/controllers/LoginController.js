const Users = require('./models/Users')
class LoginController {


    login(req, res){

        res.render('login')
    }
    
    secret(req, res){

        res.render('secret')
    }
    async index(req, res){
        const user = await Users.findOne({ username: req.body.username})
        if(user){
            const result = user.password === req.body.password;
            if(result){
                
                res.json('dang nhap thanh cong roi')
               
            }
            else{
                res.status(400).json({ error: "password doesn't match" });
            }
        }
        else{
            res.status(400).json({ error: "User doesn't exist" });
        }
    }
    
}
module.exports = new LoginController;
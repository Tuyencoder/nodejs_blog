class NewsController {


    //[GET] /news
    index(req, res){

        res.render('news')
    }

    show(req, res){

        res.send('details cour')
    }
    
}
module.exports = new NewsController;
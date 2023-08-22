
const routerNews = require("./news");
const routerSites = require("./site");
const routerCourses = require("./courses")
const routerLogin = require("./routerLogin");
const routerRegister = require("./routerRegister");


function route(app) {

        app.use("/courses", routerCourses);

        app.use("/news", routerNews);

        app.use("/login", routerLogin);

        app.use("/register", routerRegister);

        app.use("/", routerSites);
        
        
       

       
}

module.exports = route;

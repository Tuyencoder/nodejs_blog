
const mongoose = require('mongoose');
async function  connect(){
    try{

        await mongoose.connect('mongodb://localhost:27017/f8_course_dev');
        console.log('successfully connected');

    }catch(e){
        console.log('connection error')
    }
}

module.exports = {
    connect
};
var mongoose = require('mongoose');

var puzzleschema = new mongoose.Schema({

    name:{
        type:String
    },
    images:{
        type:String
    },
    mixword:{
        type:String
    },
    cat_id:{
        type:String
    }
})

module.exports = mongoose.model("puzzle",puzzleschema);
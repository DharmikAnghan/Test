var mongoose = require('mongoose');

var categoryschema = new mongoose.Schema({

    name:{
        type:String
    },
    images:{
        type:String
    }
})

module.exports = mongoose.model("category",categoryschema);

var category = require("../model/CategoryModel");

exports.add_category = async (req,res) => {

   var obj = {
    "name":req.body.name,
    "images":req.body.images
   }

   var data = await category.create(obj);

   res.status(200).json(
    data
   )
}

exports.view_category = async (req,res) => {

    var data = await category.find();
 
    res.status(200).json(
     data
    )
}
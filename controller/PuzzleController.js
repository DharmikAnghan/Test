
var puzzle = require("../model/PuzzleModel");

exports.add_puzzle = async (req,res) => {

    var cat_id = req.params.cat_id;
    var result = "";

    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    var len = req.body.name.length;

    for ( let i = 0; i <16-len; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * len));
    }

    var mixword = result+req.body.name;

    function shuffle(string) {
        var parts = string.split('');
        for (var i = parts.length; i > 0;) {
            var random = parseInt(Math.random() * i);
            var temp = parts[--i];
            parts[i] = parts[random];
            parts[random] = temp;
        }
        return parts.join('');
    }

    mixword = shuffle(mixword);

    res.status(200).json({
        mixword
    })

   var obj = {
    "name":req.body.name,
    "images":req.file.originalname,
    "mixword":mixword,
    "cat_id":cat_id
   }

   var data = await puzzle.create(obj);

   res.status(200).json(
    data
   )
}

exports.view_puzzle = async (req,res) => {

    var data = await puzzle.find();
 
    res.status(200).json(
     data
    )
}

exports.category_puzzle = async (req,res) => {

    var cat_id = req.params.cat_id;

    var data = await puzzle.find({"cat_id":cat_id});
 
    res.status(200).json(
     data
    )
}

exports.level_puzzle = async (req,res) => {

    var cat_id = req.params.cat_id;
    var level_no = req.params.level_no;

    var start = (level_no-1)*1;

    var data = await puzzle.find({"cat_id":cat_id}).limit(1).skip(start);
 
    res.status(200).json(
     data
    )

}
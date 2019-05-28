//HTML code
<form action="/images" method="POST" enctype="multipart/form-data">
<input type="file" name="picture" accept="application/x-zip-compressed,image/*">
<input class="form-control" type="text" name="description" placeholder="Description or Message">
<input class="btn btn-primary" type="submit" value="submit">
</form>

//schema 

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Item = new Schema(
  { img:
      { data: Buffer,
          contentType: String }
  }
);


module.exports = mongoose.model('Clothes',Item);


//code
express = require('express')
   , router = express.Router()
   , fs = require('fs-extra')
   , multer = require('multer')
   , util = require('util')
   , upload = multer({limits: {fileSize: 2000000 },dest:'/uploads/'}) ;

const Images=require('../models/image');

router.get('/', function(req, res){ res.render('shop/index'); });


router.post('/images', upload.single('picture'), function (req, res){
if (req.file == null) {

  return res.send("file not select ");
}

var newItem = new Images();
 newItem.img.data = fs.readFileSync(req.file.path);
 newItem.img.contentType = 'image/png';
 newItem.save();


});


module.exports = router;

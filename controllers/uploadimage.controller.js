const fs = require("fs");
var stream = require('stream');

const db = require("../models");
const Image = db.Image;

const uploadFiles = async (req, res) => {
  try {
    console.log(req.file);

    if (req.file == undefined) {
      return res.send(`You must select a file.`);
    }

    Image.create({
      userId:req.userId,
      imageType: req.file.mimetype,
      imageName: req.file.originalname,
      imageData: req.file.buffer
      
    }).then((image) => {
      
console.log(image);
      return res.send(`File has been uploaded.`);
    });
  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload images: ${error}`);
  }
};

const downloadFile = (req, res) => {
    // console.log(req)
    const response=Image.findAll({
        where:{
            userId:req.userId
        }
    })
    .then(response=>{
        // console.log("Response",)
        var fileContents = Buffer.from(response[0]["imageData"], "base64");
		var readStream = new stream.PassThrough();
		readStream.end(fileContents);
		
		res.set('Content-disposition', 'attachment; filename=' + response[0]["imageName"]);
		res.set('Content-Type', response[0]["imageType"]);

		readStream.pipe(res);
        
    }).catch(err=>{
        console.log(err);
        res.json({msg: 'Error', detail: err});
    })
	
}

module.exports = {
  uploadFiles,
  downloadFile
};
 
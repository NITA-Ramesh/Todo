const multer = require("multer");

const imageFilter = (req, file, done) => {
    // console.log("Mid",req.userId)
  if (file.mimetype.startsWith("image")) {
    done(null, true);
  } else {
    done("Please upload only images.", false);
  }
};

// var storage = multer.diskStorage({
//   destination: (req, file, done) => {
//     done(null, __basedir + "/resources/static/assets/uploads");
//   },
//   filename: (req, file, done) => {
//     done(null, `${req.userId}.png`);
//   },
// });

// var uploadFile = multer({ storage: storage, fileFilter: imageFilter });


var storage = multer.memoryStorage()
var upload = multer({storage: storage});

module.exports = upload;
// module.exports = uploadFile;
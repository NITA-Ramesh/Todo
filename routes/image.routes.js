const { authJwt } = require("../middleware");
const controller = require("../controllers/uploadimage.controller");
const upload = require("../middleware/uploadimage");
const express = require("express");

module.exports = function(app) {
  app.use(express.urlencoded({ extended: true }));

  
  app.post(
    "/api/test/upload",
    [authJwt.verifyToken],
    upload.single("file"),
    controller.uploadFiles
  );
  app.get("/api/test/download",
  [authJwt.verifyToken],
  controller.downloadFile
  )
};
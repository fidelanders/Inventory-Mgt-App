const express = require ("express")
const multer = require("multer")
const { storage } = require("../database/db")

const upload = multer({
    storage: storage,
    limits : {fileSize : 1000000} 
}).single("image");

exports.uploadImg = (req, res) => {
    upload(req, res, (err) => {
    if(err) {
      res.status(400).json({success: 0, msg: `File not Recognized! Upload failed!`});
    }
    res.json(req.file);
    console.log(req.file)
  });
};

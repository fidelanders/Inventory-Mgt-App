const multer = require ('multer')

const express = require ("express");
const { storage } = require('../database/db');
const { uploadImg } = require('../controller/uploadController')
const router = express.Router();

//upload product Image
router.post("/image", uploadImg)
module.exports = router;
var express = require('express')
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
 
var app = express()

const Router = express.Router();

Router.use(express.urlencoded({ extended: true }));

Router.use(express.json());

Router.post('/upload',)


module.exports = Router;
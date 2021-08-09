const mongoose = require('mongoose');
require("dotenv").config();
const multer = require("multer")
const path = require("path")

const storage = multer.diskStorage({   
    destination: function(req, file, cb) { 
       cb(null, './upload/images');    
    }, 
    filename: function (req, file, cb) { 
       cb(null , file.originalname);   
    }
 });

 module.exports = { storage }

DB_URL = process.env.DB_URL
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
    process.on("SIGINT", async () => {
        await mongoose.connection.close();
        process.exit(0);
    });
    
    mongoose.connection.on("connected", () => {
        console.log("Mongo has connected successfully");
    });
    mongoose.connection.on("reconnected", () => {
        console.log("Mongo has reconnected");
    });
    mongoose.connection.on("error", (error) => {
        console.log("Mongo connection has an error", error);
        mongoose.disconnect();
    });
    mongoose.connection.on("disconnected", () => {
        console.log("Mongo connection is disconnected");
    });
    


module.exports = mongoose
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

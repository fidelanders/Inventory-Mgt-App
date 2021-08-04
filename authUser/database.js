const mongoose = require('mongoose');
require("dotenv").config();

DB_URL = process.env.DB_URL
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
    process.on("SIGINT", async () => {
        await mongoose.connection.close();
        process.exit(0);
    });
    
    mongoose.connection.on("connected", () => {
        console.log("Mongo has connected succesfully");
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

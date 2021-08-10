require('dotenv').config()
const express = require('express');
const multer = require("multer");
const { storage } = require('./database/db');
const userRoute = require('./Route/userRoute')
const uploadRoute = require('./Route/uploadRoute')
const productRoute = require('./Route/productRoute')
const app = express();

PORT = process.env.PORT;


// //using ngrok
// const ngrok = require('ngrok');
// (async function() {
//   const url = await ngrok.connect(PORT);
//   console.log(url)
// })();


app.get("/", (req, res)=>{
res.json("Welcome to Inventory Mgt API")
})

//mounting users routes
app.use('/users', userRoute);
app.use('/products', productRoute);
app.use("/product", uploadRoute);

// connecting and listening to server 
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

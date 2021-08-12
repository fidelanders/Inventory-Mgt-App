const dotenv = require('dotenv').config()
const express = require('express');
const userRoute = require('./Route/userRoute')
const app = express();

PORT = process.env.PORT;


// //using ngrok
// const ngrok = require('ngrok');
// (async function() {
//   const url = await ngrok.connect(PORT);
//   console.log(url)
// })();


app.get("/", (req, res)=>{
res.json("Welcome to EMERGENCY REPORT APP API")
})

//mounting users routes
app.use('/users', userRoute);


// connecting and listening to server 
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

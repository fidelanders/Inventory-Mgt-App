const dotenv = require('dotenv').config()
const express = require('express');
const userRoute = require('./Route/userRoute')
const app = express();

PORT = process.env.PORT;


app.get("/", (req, res)=>{
res.send("Welcome to EMERGENCY REPORT APP API")
})

//mounting users routes
app.use('/users', userRoute);


// connecting and listening to server 
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

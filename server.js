require('dotenv').config()
const express = require('express');
const ngrok = require('ngrok');

const userRoute = require('./Route/userRoute')
const productRoute = require('./Route/productRoute')
const app = express();

PORT = process.env.PORT;

//landing page for api
app.get ('/', (req,res)=>{
    res.send ("welcome to my api")
    .status(200);
})

//mounting users routes
app.use('/users', userRoute);
app.use('/products', productRoute);

//testing with ngrok
(async function() {
    const url = await ngrok.connect(PORT);

console.log (url);
  })();
//connecting and listening to server 
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

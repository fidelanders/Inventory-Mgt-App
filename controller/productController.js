
const { response } = require('express');
const User = require('../model/userModel');
const utils = require('../utils/utils');
const Product = require('../model/productModel');

//creating a new products
exports.addProduct = async (req, res) => {
    const body = req.body;
    
    let user = req.user;
    let userid = user._id
    let product = { brandName, model, description, engineType, categories, mileage, price, year, imageUrl, numberInStock}  = body;
    product.userid = userid;
    
    let response;
    try{
        response = await Product.create({...product})
        res.json(response)
        
    }
    catch(err){
        console.log(err)
    }
}


//getting all products
exports.getProducts = async (req, res) => {
    const userid=req.user._id
   
    try{
        const user = await Product.find({userid}); 
        res.status(200).json({
            status:'success',
            data:user,
});
        }
    catch (err) {
    console.log(err) 
}
   
};

//getting a single product by id
exports.getSingleProduct = async (req, res) => {
    const userid = req.user._id
    const productid=req.params.id
   
    try{
        const product = await Product.find({userid:userid,_id:productid}) 
        res.status(200).json({
            status:'success',
            data:product
});
        }
    catch (err) {
    console.log(err) 
};
 
};

// Updating Product
exports.updateProduct = async (req, res) => {
    let productId = req.params.id;
    let update = req.body;
    const response = await Product.findByIdAndUpdate(productId, update);
    if(response) {
        res.status(200).json({
            status: "Successful",
            message: `Product with id ${response._id} updated`
        })
    }
}

exports.deleteProduct = async (req, res) => {
    let productId = req.params.id;
    let del = req.body;
    const response = await Product.findByIdAndDelete({_id:productId});
    if(response) {
        res.status(200).json({
            status: "Successful",
            message: `Product with id ${response._id} deleted`
        })
    }
}


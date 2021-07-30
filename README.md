<h1 align="center">  Inventory Management App</h1>

## 🚩 &nbsp; Main Features

 > This is an Inventory Mgt App was made to track the order state since the customer place it
 > once it's shipped the seller mark it as shipped, and then the shipper mark it as delivered.

#### Backend Modules Used

 - Express
 - Nodemon
 - Mongoose
 - Json Web Token (For authentication)
 - bcryptjs (for data encryption)

## 💡 &nbsp; Key Concepts

 - CRUD operations
 - Authentication system
 - Encrypting passwords

#### Project methodology
***************************************************************************************************
**To Signup and Login**
  - Everyone is registered as a user using "/users/signup"
    Registered User's details is validated to correctness using the auth.js before it is acccepted
  - Registered user can signin using "/users/login"

**Create, Update, Delete and Get all products**
  - Create product using "/products/create
  - Update product by id using "/products/<userid>
  - Get a Single product using "/products/<userid>
  - Delete a product using "/products/<userid>
***************************************************************************************************

## 💻 &nbsp; Setup
**************************************************
To run this project, install it locally using npm:

$ cd inventory-mgt-app-grp10
$ npm install (install dependencies)
$ npm start (for Node server side development)
**************************************************

## &nbsp; ENV
 - PORT=
 - DB_URI=
 - JWT_SECRET=


# Author

👤 &nbsp; 
  **Ogbeni Fidelis**,
  **Abdulkadir Minur**,
  **Oyibo Delmas**

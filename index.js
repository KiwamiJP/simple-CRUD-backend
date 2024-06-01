const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require("./routes/product.route.js");

const app = express();
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))
//routes
app.use('/api/products',productRoute);
app.get('/', (req, res) =>{
    res.send('Hello from node API Again')
  })  
 

  mongoose
  .connect(
    "mongodb+srv://heinniux:2cuo0AL9C2CZGwqY@crud-nodejs.swhligk.mongodb.net/Node-API?retryWrites=true&w=majority&appName=CRUD-NodeJS"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3001, () => {
      console.log("Server is running on port 3001");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
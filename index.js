const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(bodyParser.json());
const mongoose = require('mongoose');

// Import Routes
const productRoute = require('./routes/Product.route');
const userRoute = require('./routes/User.route');

//Middlewares
app.use('/api/products', productRoute);
app.use('/api/users', userRoute);

app.use(cors());




//connect to mongodb
// const { MongoClient } = require('mongodb');
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.oiqme.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   console.log("db connected successfully");
//   // perform actions on the collection object
//   client.close();
// });

//DB connection
mongoose.connect(
    'mongodb+srv://ahmed:ahmed4321@cluster0.oiqme.mongodb.net/ahVending?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true },
  ).then(() => {console.log('Db Connected')}).catch((err)=>{console.log(err)});
//ROUTES
app.get('/', (req, res) => {
    res.send('Alhamdulillah');
})

app.listen(3005);

const express = require("express");
const bodyParser = require("body-parser");
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");
const cartRoutes = require("./routes/cartRoutes");
const cors = require("cors");

const server = express();
server.listen(4100);

// configure middlewares.

server.use((req, res, next)=>{
     // Website you wish to allow to connect
     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

     // Request methods you wish to allow
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
 
     // Request headers you wish to allow
     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
 
     // Set to true if you need the website to include cookies in the requests sent
     // to the API (e.g. in case you use sessions)
     res.setHeader('Access-Control-Allow-Credentials', true);
 
     // Pass to next layer of middleware
     next();
});

server.use(cors());
server.use(bodyParser.json());

server.use("/api/products", productRoutes);
server.use("/api/auth", authRoutes);
server.use("/api/cart", cartRoutes);

server.get("/",(req, res)=>{
    res.send("Welcome to E-Com Server");
});

console.log("Server is listening on 4100");
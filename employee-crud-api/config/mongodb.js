
// 1. Import mongodb package.
const mongodb = require("mongodb");

// 2. Get the client.
const mongoClient = mongodb.MongoClient;

// 3. Define the URI.
const uri = "mongodb://localhost:27017/employeedb";

// 4. Connect to mongodb.

module.exports.connect = ()=>{
    mongoClient.connect(uri)
    .then((client)=>{
        console.log("MongoDB is connected");
    }).catch(err=>{
        console.log(err);
    });
}
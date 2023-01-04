
const mongodb = require("../config/mongodb");
const {ObjectId} = require("mongodb");

module.exports.add = (employee, cb)=>{
    console.log("repo add");
    // 1. Get the collection.
    const collection = mongodb.getCollection("employees");
    // 2. Call insertOne function and pass the document.
    collection.insertOne(
        {
            name:employee.name,
            email:employee.email
        }
        ).then(
        (res)=>{
            cb(null, "Document is inserted");
        }
    ).catch(err=> {
        
        console.log(err);
        cb(err, null)});
}

module.exports.getAll = (cb)=>{
    const collection = mongodb.getCollection("employees");
    // find is used to get all docs from mongodb.
    collection.find()
        .toArray()
            .then((docs)=>{
                cb(docs);
            })
}

module.exports.getById = (id, cb)=>{
    const collection = mongodb.getCollection("employees");
    collection.find({_id:ObjectId(id)})
        .toArray()
            .then((docs)=>{cb(docs)});
}
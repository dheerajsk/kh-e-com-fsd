const jwt = require("jsonwebtoken");

const auth = (req, res, next)=>{

    // 1. Check if token is provided.
    const token = req.headers["authorization"];
    if(!token){
        return res.status(401).send("No auth token found");
    }

    // 2. Check if token is valid.
    try{
        const user = jwt.verify(token, "THISISSECRET");
        if(!user){
            return res.status(401).send("Invalid token");
        }
        console.log(user);
    }catch(err){
        return res.status(401).send("Invalid token");
    }
   

    // 4. else call next middleware.
    next();
}

module.exports.auth = auth;
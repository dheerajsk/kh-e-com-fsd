
const users=[];

module.exports.register = (req, res)=>{
    console.log("Registration end point");
    const user = req.body;
    console.log(req.body);
    if(!user){
        return res.status(400).send("User couldn't be created");
    }
    users.push(user);
    console.log(users);
    return res.status(200).send("User is created");
}

// Request => URL, Type[Gte, Post, Put Delete], Body is Payload.

module.exports.login = (req, res)=>{
    // Step 1. To read email and password sent by client.
    const user = req.body;
    // Step 2: Find user from users array with matching credentials.'
    const userFound = users.find(u=> u.email==user.email && u.password==user.password);
    if(userFound){
        return res.status(200).send(userFound);
    }else{
        return res.status(400).send();
    }

}
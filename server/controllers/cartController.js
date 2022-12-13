
const cartItems=[];

module.exports.add = (req, res)=>{

    const item = req.body;
    if(!item.email || !item.product){
        return res.status(400).send("Invalid cart item");
    }
    cartItems.push(item);
    console.log(cartItems);
    return res.status(200).send("Item is added");
}

module.exports.get = (req, res)=>{
    const email = req.body.email;
    cartItems.filter(i=> i.email==email);

}
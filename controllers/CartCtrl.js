import CartModel from "../models/CartModel.js";
const CartCtrl = async (req,res)=>{
    try{
    const newItem = new CartModel(req.body);
    await newItem.save();
    res.status(200).send('Cart Updated');
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}
const FindCart = async (req, res) =>{
try{
    const FoundCart = await CartModel.find({userID: req.body.userID})
    res.status(200).json(FoundCart);

}catch(error){
    console.log(error)
    res.status(500).send('Not Found!')
}
}
const DeleteCart = async (req, res)=>{
    try{
        await CartModel.findOneAndDelete({_id: req.body.itemID});
        res.status(200).send('Deleted');
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}
const DeleteAll = async (req, res)=>{
    try{
        await CartModel.deleteMany({userID: req.body.userID});
        res.status(200).send('Deleted!');
    }catch(err){
        res.status(500).send(err);
    }
}
export {CartCtrl, FindCart, DeleteCart, DeleteAll};
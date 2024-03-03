import WishlistModel from "../models/WishlistModel.js";
const AddItems = async (req,res) =>{
    try{
        const newItem = new WishlistModel(req.body);
        await newItem.save();
        res.status(200).send('Wishlist Updated')
    }catch(error){
        res.status(500).send(error);
    }
}
const GetItems = async (req, res) =>{
    try{
        const wishlistItems = await WishlistModel.find({userID: req.body.userID});
        res.status(200).send(wishlistItems);
    }catch(error){

    }
}
const DeleteItems = async (req, res)=>{
    try{
        await WishlistModel.findOneAndDelete({_id: req.body.itemID});
        res.status(200).send('Deleted!')
    }catch(error){
        res.status(500).send(error);
    }
}
export{AddItems,GetItems,DeleteItems}
import mongoose from "mongoose";
const CartSchema = new mongoose.Schema(
    {
        userID:{type:String},
        image:{type:String,},
        title:{type:String,},
        price:{type:Number,},
        size:{type:String,},
        quantity:{type:Number,},
        link:{type:String,},
    },{timestamps:true}
);
const CartModel = mongoose.model('cart', CartSchema);
export default CartModel;
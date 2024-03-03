import mongoose from "mongoose";
const OrderSchema = new mongoose.Schema({
    userID: {
        type:String,
    },
    OrderItems: {
        type:Array,
    },
    OrderTotal:{
        type:Number,
    },
    address: {
        type:String,
    }
},{timestamps:true});
const OrderModel = mongoose.model('orders', OrderSchema);
export default OrderModel;

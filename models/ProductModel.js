import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema(
    {
        image:{type:String, },
        title:{type:String, },
        discription:{type:String, },
        type:{type:String, },
        price:{type:Number, },
        link:{type:String, },
        size:{type:String, },
        quantity:{type:Number, },
    },{timestamps:true}
);
const ProductModel = mongoose.model('products', ProductSchema);
export default ProductModel;
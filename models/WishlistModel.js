import mongoose from "mongoose";
const WishlistSchema = new mongoose.Schema(
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
const WishlistModel = mongoose.model('Wishlist', WishlistSchema);
export default WishlistModel;
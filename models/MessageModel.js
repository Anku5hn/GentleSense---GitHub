import mongoose from "mongoose";
const MessageSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        required:true,
    },
    subject:{
        type:String,
    },
    message: {
        type:String,
    },
})
const MessageModel = mongoose.model('messages',MessageSchema);
export default MessageModel;
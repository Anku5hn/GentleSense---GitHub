import MessageModel from "../models/MessageModel.js";
const NewMessageCtrl = async (req, res) =>{
    try{
        const newMessage = new MessageModel(req.body);
        await newMessage.save();
        res.status(200).send('Message Sent!');
    }catch(error){
        res.status(500).send('Something Went Wrong!');
    }
}
const MessageReadCtrl = async (req, res)=>{
    try{
        const AllMessages = await MessageModel.find({});
        res.status(200).json(AllMessages);
    }catch(error){
        res.status(500).send('Not Found!');
    }
}

const DeleteMessage = async (req, res) =>{
    try{
        await MessageModel.findOneAndDelete({_id: req.body.msgid});
        res.status(200).send('Deleted!');
    }catch(err){
        res.status(500).send(err);
    }
}
export {NewMessageCtrl, MessageReadCtrl, DeleteMessage}
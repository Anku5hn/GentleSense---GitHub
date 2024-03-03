import OrderModel from "../models/OrderModel.js";
const CreateOrder = async (req, res)=>{
try{
 const NewOrder = new OrderModel(req.body);
 await NewOrder.save();
res.status(200).send('Order Placed!');
}catch(err){
    res.status(500).send(err);
}
}
const ViewOrders = async (req, res) =>{
    try{
        const allOrders = await OrderModel.find({});
        res.status(200).json(allOrders);
    }catch(error){
        res.status(500).send(error);
    }
}
const CancleOrder = async (req,res)=>{
    try{
        await OrderModel.findOneAndDelete({_id: req.body.orderID});
        res.status(200).send('Order Cancled');
    }catch(err){
        res.status(500).send(err);
    }
}
const UserOrder = async (req, res) =>{
    try{
        const UserOrders = await OrderModel.find({userID: req.body.userID});
        res.status(200).json(UserOrders);
    }catch(err){
        res.status.send(err)
    }
}
export {CreateOrder, CancleOrder, ViewOrders,UserOrder}
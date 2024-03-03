import ProductModel from "../models/ProductModel.js";
const ProductCtrl = async (req,res)=>{
    try{
    const newProduct = new ProductModel(req.body);
    await newProduct.save();
    res.status(200).send('New Product Created.');
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }

}
export {ProductCtrl};
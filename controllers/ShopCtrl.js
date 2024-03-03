import ProductModel from '../models/ProductModel.js'
const ShopCtrl = async (req, res) =>{
try{
const ShopItems = await ProductModel.find({});
res.status(200).json(ShopItems);
}catch(error){
console.log(error);
}
}
export {ShopCtrl}
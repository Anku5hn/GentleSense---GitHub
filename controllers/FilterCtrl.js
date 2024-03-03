import ProductModel from "../models/ProductModel.js";
const FilterCtrl = async (req, res) =>{
    try{
        const FilterItems = await ProductModel.find({type: req.body.types});
        res.status(200).send(FilterItems);
    }catch(error){
        res.status(500).send('error');
        console.log(error)
    }
}
export {FilterCtrl}
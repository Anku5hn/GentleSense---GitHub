import ProductModel from "../models/ProductModel.js";
const DeleteProductCtrl = async (req, res) =>{
    try{
        await ProductModel.findOneAndDelete({_id: req.body.value});
        res.status(200).send('deleted')
    }catch(error){
console.log(error)
res.status(500).send(error)
    }
}
export {DeleteProductCtrl}
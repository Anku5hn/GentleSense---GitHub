import UserModel from "../models/UserModel.js";
const NewUserCtrl = async (req,res) =>{
    try{
        const newUser = new UserModel(req.body);
        await newUser.save();
        res.status(200).send('New User Created!')

    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}
const LoginCtrl = async (req, res)=>{
    try{
        const user = await UserModel.findOne({$and: [{email: req.body.email}, {password: req.body.password}]});
        if(!user){
            res.status(404).send('User Not Found');
        }else{
            
            res.status(200).json({user});
        }
    }catch(error){
        console.log(error);
        res.status(500).send('User Not Found')
    }
}
export {NewUserCtrl, LoginCtrl}
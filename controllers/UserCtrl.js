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
        const {email, password} = req.body;
        const user = await UserModel.findOne({$and: [{email}, {password}]});
        if(user){
            res.status(200).json({user});
        }else{
             res.status(404).send('User Not Found!');
        }
    }catch(error){
        console.log(error);
        res.status(500).send('User Not Found')
    }
}
export {NewUserCtrl, LoginCtrl}
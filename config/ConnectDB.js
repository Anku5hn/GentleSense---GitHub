import mongoose from "mongoose";
const ConnectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`MONGO DB CONNECTION: ${mongoose.connection.host}`);
    }catch(error){
        console.log(error);
    }
}

export default ConnectDB
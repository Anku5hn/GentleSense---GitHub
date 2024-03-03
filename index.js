import express from "express";
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import ConnectDB from './config/ConnectDB.js'
import { ProductRoute } from "./routes/ProductRoute.js";
import { UserRouter } from "./routes/UserRoute.js";
import { CartRoute } from "./routes/CartRoute.js";
import { WishlistRoute } from "./routes/WishlistRoute.js";
import { MessageRoute } from "./routes/MessageRoute.js";
import { OrderRouter } from "./routes/OrderRoute.js";
import path from 'path'
import { dirname } from "path";
import { fileURLToPath } from "url";
dotenv.config();
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/v1/product',ProductRoute);
app.use('/api/v1/users', UserRouter);
app.use('/api/v1/cart', CartRoute);
app.use('/api/v1/wishlist',WishlistRoute);
app.use('/api/v1/messages',MessageRoute);
app.use('/api/v1/orders',OrderRouter);
app.use(express.static(path.join(__dirname, './client/build')));
app.get('*', (req, res) =>{
  res.sendFile(path.join(__dirname, './client/build/index.html'));
})
const PORT = process.env.port || 8080;
ConnectDB().then(()=>{
app.listen(PORT, ()=>{
    console.log(`SERVER PORT: ${PORT}`);
})
})

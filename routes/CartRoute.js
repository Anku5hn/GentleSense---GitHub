import express from "express";
import { CartCtrl,FindCart,DeleteCart ,DeleteAll} from "../controllers/CartCtrl.js";
const CartRoute = express.Router();
CartRoute.post('/add-item', CartCtrl);
CartRoute.post('/find-cart', FindCart);
CartRoute.post('/delete-cart', DeleteCart);
CartRoute.post('/delete-all', DeleteAll);
export {CartRoute}
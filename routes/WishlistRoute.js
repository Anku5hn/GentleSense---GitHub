import express from 'express'
import {AddItems, GetItems, DeleteItems} from '../controllers/WishlistCtrl.js'
const WishlistRoute = express.Router();
WishlistRoute.post('/add-items', AddItems);
WishlistRoute.post('/get-items', GetItems);
WishlistRoute.post('/delete-items',DeleteItems);
export {WishlistRoute};
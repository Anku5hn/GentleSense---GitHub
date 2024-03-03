import express from 'express'
import { ProductCtrl } from '../controllers/ProductCtrl.js'
import { ShopCtrl } from '../controllers/ShopCtrl.js';
import {DeleteProductCtrl} from '../controllers/DeleteProductCtrl.js'
import { FilterCtrl } from '../controllers/FilterCtrl.js';
const ProductRoute = express.Router();
ProductRoute.post('/add-product', ProductCtrl);
ProductRoute.get('/get-products', ShopCtrl);
ProductRoute.post('/delete-product', DeleteProductCtrl);
ProductRoute.post('/filter-products', FilterCtrl);
export {ProductRoute}
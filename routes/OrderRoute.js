import express from 'express'
import {CreateOrder, CancleOrder, ViewOrders,UserOrder} from '../controllers/OrderControl.js'
const OrderRouter = express.Router();
OrderRouter.post('/new-order', CreateOrder);
OrderRouter.post('/cancel-order',CancleOrder);
OrderRouter.get('/get-orders', ViewOrders);
OrderRouter.post('/user-orders',UserOrder);
export {OrderRouter}
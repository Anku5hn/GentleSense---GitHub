import { NewUserCtrl, LoginCtrl } from "../controllers/UserCtrl.js";
import express from 'express'
const UserRouter = express.Router();
UserRouter.post('/new-user', NewUserCtrl);
UserRouter.post('/login', LoginCtrl)
export {UserRouter}
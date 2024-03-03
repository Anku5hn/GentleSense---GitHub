import {NewMessageCtrl, MessageReadCtrl, DeleteMessage} from '../controllers/MessageCtrl.js'
import express from 'express'
const MessageRoute = express.Router()
MessageRoute.post('/new-message', NewMessageCtrl);
MessageRoute.get('/allmessages', MessageReadCtrl);
MessageRoute.post('/delete-message', DeleteMessage);
export {MessageRoute}
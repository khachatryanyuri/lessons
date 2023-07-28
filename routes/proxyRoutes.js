import express from 'express';
const router = express.Router();
import { proxyController } from '../controllers/proxyController.js';

router.get('/proxy', proxyController.getAllProxies);

export default router;

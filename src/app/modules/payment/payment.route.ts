import { Router } from 'express';
import { paymentController } from './payment.controllar';


const router = Router();

// Route to create an order
router.post('/confirmation',paymentController.confriMationController);
 
export const paymentRoutes = router;
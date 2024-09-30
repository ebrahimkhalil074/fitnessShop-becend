import { Request, Response } from 'express';
import { paymentService } from './payment.services';


export const confriMationController = async (req: Request, res: Response) => {
   const {transactionId,status} =req.query

   const result = await paymentService.confirmPayment(transactionId as string,status as string)
   res.send(result)
};

export const paymentController ={
confriMationController




}
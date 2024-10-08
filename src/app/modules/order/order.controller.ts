import { Request, Response } from 'express';
import { orderService } from './order.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

export const createOrderController =  catchAsync(async (req: Request, res: Response) => {
   
        const orderData = req.body;
        const result = await orderService.createOrder(orderData);
        sendResponse(res,{
            statusCode: httpStatus.OK,
            success: true,
            message:  "order create successfully!",
            data: result,   
        })
    
});


import { Request, Response } from 'express';
import { productsService } from './product.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const createProduct =catchAsync( async(req,res)=>{
const product = req.body
const result =await productsService.createProductFromDB(product);
sendResponse(res,{
    statusCode: httpStatus.OK,
    success: true,
    message:  "Product create successfully!",
    data: result,   
})
})
const getAllProductsHandler =catchAsync( async(req,res)=>{
// console.log(req.query)
const result = await productsService.getAllProducts(req.query);

sendResponse(res,{
    statusCode: httpStatus.OK,
    success: true,
    message:  " all Products retrived successfully!",
    data: result,   
})
})



const getProductByIdHandler =catchAsync(async (req: Request, res: Response) => {
   
        const result = await productsService.getProductById(req.params.id);
        sendResponse(res,{
            statusCode: httpStatus.OK,
            success: true,
            message: 'product retrive successfully',
            data: result,   
        })
   
});
const updateProduct=catchAsync(async(req,res)=>{
    const {id} = req.params
    const product = req.body
    
   
        const result = await productsService.updateProductFromDB(id,product);
        sendResponse(res,{
            statusCode: httpStatus.OK,
            success: true,
            message: ' Product are updated successfully',
            data: result,   
        })
    });
const deleteProduct=catchAsync(async(req,res)=>{
    const {id} = req.params
    console.log(id)
        const result = await productsService.deleteProductFromDB(id);
        sendResponse(res,{
            statusCode: httpStatus.OK,
            success: true,
            message: ' Product are  deleted successfully',
            data: result,   
        })
    })
export const productsController = {
    createProduct,
    getAllProductsHandler,
    getProductByIdHandler,
    updateProduct,
    deleteProduct
 
}

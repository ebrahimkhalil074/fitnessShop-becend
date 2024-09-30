import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { categoryService } from "./category.services";

const createCategoryHandler =catchAsync( async(req,res)=>{
    const category = req.body
    const result =await categoryService.createCategoryFromDB(category);
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success: true,
        message:  "category create successfully!",
        data: result,   
    })
    })

    const getAllCategoryHandler =catchAsync( async(req,res)=>{

        const result = await categoryService.getAllCategory();
        sendResponse(res,{
            statusCode: httpStatus.OK,
            success: true,
            message:  " all category retrived successfully!",
            data: result,   
        })
        })
   
    

    export const categoryController={
        createCategoryHandler,
        getAllCategoryHandler,
    }
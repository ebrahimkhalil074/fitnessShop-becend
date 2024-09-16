import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { userServices } from "./user.service";

const createUser=catchAsync(async(req,res)=>{
    console.log( 'test',req.body);
    
    const result = await userServices.createUserIntoDB(req.body);
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success: true,
        message: 'User registered successfully',
        data: result,   
    })
})
const getAllUsersFromDB=catchAsync(async(req,res)=>{
   
    const result = await userServices.getAllUsersFromDB();
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success: true,
        message: ' all User rectrive successfully',
        data: result,   
    })
})



 
export const userController ={
    createUser,
    getAllUsersFromDB
}
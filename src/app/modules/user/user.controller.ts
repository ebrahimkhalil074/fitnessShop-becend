import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { userServices } from "./user.service";

const createUser=catchAsync(async(req,res)=>{
    // console.log( 'test',req.body);
    
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


const updateUserRole=catchAsync(async(req,res)=>{
    const {id} = req.params
    const  role = req.body
        const result = await userServices.updateUserRoleIntoDB(id,role);
        sendResponse(res,{
            statusCode: httpStatus.OK,
            success: true,
            message: ' user role updated successfully',
            data: result,   
        })
    });
const updateUser=catchAsync(async(req,res)=>{
    const {id} = req.params
    const  data = req.body
        const result = await userServices.updateUserRoleIntoDB(id,data);
        sendResponse(res,{
            statusCode: httpStatus.OK,
            success: true,
            message: ' user  updated successfully',
            data: result,   
        })
    });

 
export const userController ={
    createUser,
    getAllUsersFromDB,
    updateUserRole,
    updateUser
 
}
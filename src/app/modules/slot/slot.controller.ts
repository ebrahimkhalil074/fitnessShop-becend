
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { slotServices } from "./slot.service";




const createSlot=catchAsync(async(req,res)=>{
   
    const result = await slotServices.createSlotIntoDB(req.body);
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success: true,
        message: 'slots is created succesfully',
        data: result,   
    })
})
const getAllAvailableSlotsFromDB=catchAsync(async(req,res)=>{
    
    
    const result = await slotServices.getAllAvailableSlotsFromDB(req.query);
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success: true,
        message: 'Available slots retrieved successfully',
        data: result,   
    })
})







export const slotController ={
   createSlot,
   getAllAvailableSlotsFromDB,
 
}
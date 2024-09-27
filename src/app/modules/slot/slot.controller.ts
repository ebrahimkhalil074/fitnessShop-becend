
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
const singleServiceAllSlots=catchAsync(async(req,res)=>{
    const {id} = req.params

    const result = await slotServices.singleServiceAllSlotsFromDB(id);
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success: true,
        message: 'all slots retrieved successfully',
        data: result,   
    })
})

const updateSlotsStstus=catchAsync(async(req,res)=>{
    const {id} = req.params
    const  status = req.body
        const result = await slotServices.updateSlotsStatusIntoDB(id,status);
        sendResponse(res,{
            statusCode: httpStatus.OK,
            success: true,
            message: ' service are updated successfully',
            data: result,   
        })
    });





export const slotController ={
   createSlot,
   getAllAvailableSlotsFromDB,
   singleServiceAllSlots,
   updateSlotsStstus
 
}
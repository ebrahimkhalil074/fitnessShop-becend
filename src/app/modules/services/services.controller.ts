
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { servicesServices } from "./services.service";



const createServices=catchAsync(async(req,res)=>{
    console.log( 'test',req.body);
    
    const result = await servicesServices.createServicesIntoDB(req.body);
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success: true,
        message: 'services is created succesfully',
        data: result,   
    })
})

const getAllServices=catchAsync(async(req,res)=>{
    const result = await servicesServices.getAllServicesFromDB(req.query);
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success: true,
        message: 'All services are fetched successfully',
        data: result,   
    })
})
const getSingleServices=catchAsync(async(req,res)=>{
const {id} = req.params
    const result = await servicesServices.getSingleServicesFromDB(id);
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success: true,
        message: ' service are fetched successfully',
        data: result,   
    })
})
const updateServices=catchAsync(async(req,res)=>{
const {id} = req.params
const services = req.body

console.log( 'updateServices',id,services);
    const result = await servicesServices.updateServicesFromDB(id,services);
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success: true,
        message: ' service are updated successfully',
        data: result,   
    })
});
// const createSlot=catchAsync(async(req,res)=>{
//     console.log( 'test',req.body);
    
//     const result = await servicesServices.createSlotIntoDB(req.body);
//     sendResponse(res,{
//         statusCode: httpStatus.OK,
//         success: true,
//         message: 'slot is created succesfully',
//         data: result,   
//     })
// })
const deleteServices=catchAsync(async(req,res)=>{
const {id} = req.params

    const result = await servicesServices.deleteServicesFromDB(id);
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success: true,
        message: ' service are  deleted successfully',
        data: result,   
    })
})





export const servicesController ={
    createServices,
    // createSlot,
    getAllServices,
    getSingleServices,
    updateServices,
    deleteServices
 
}
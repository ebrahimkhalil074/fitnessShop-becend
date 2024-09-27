import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { riviewServices } from "./review.services";



const createReview =catchAsync(async(req,res)=>{
    // console.log(req.body);
    const result = await riviewServices.createReviewIntoDB(req.body);
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success: true,
        message: 'shere your expriance succesfully',
        data: result,   
    })
})
const getAllReviews =catchAsync(async(req,res)=>{;
    const result = await riviewServices.getAllReviewsFromDB();
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success: true,
        message: 'get all reviews succesfully',
        data: result,   
    })
})



export const reviewController={
  createReview,
  getAllReviews,
 
}
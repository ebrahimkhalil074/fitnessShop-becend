import { TReview } from "./review.interface";
import { review } from "./review.model"

const createReviewIntoDB =async (payload:TReview)=>{
    const result = await review.create(payload);
    return result;

}
const getAllReviewsFromDB = async ()=>{
    const result = await review.find({});
    return result;
}
 

 export const riviewServices={
    createReviewIntoDB,
    getAllReviewsFromDB
}
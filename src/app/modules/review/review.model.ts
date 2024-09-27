import { model, Schema } from "mongoose";

const  reviewSchema =new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    ratting: {type: Number, min: 1, max: 5, required: true},
    
})


export const review =model('Review',reviewSchema)
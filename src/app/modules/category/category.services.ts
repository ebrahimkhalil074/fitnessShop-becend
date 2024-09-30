/* eslint-disable @typescript-eslint/no-explicit-any */
import { Category } from "./category.model";


const createCategoryFromDB =async(payload:any)=>{
const result = await Category.create(payload);
return result
}

const getAllCategory = async () => {
    return await Category.find();
};






export const categoryService = {
    createCategoryFromDB,
    getAllCategory,
   
}

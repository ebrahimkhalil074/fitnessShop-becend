/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from "http-status";
import QueryBuilder from "../../builder/QueryBuilder";
import AppError from "../../errors/AppError";
import { TProduct } from "./product.interface";
import Product from "./product.model";


const createProductFromDB =async(payload:any)=>{
const result = await Product.create(payload);
return result
}

const getAllProducts = async (query:any) => {
    console.log('ser',query);
    const productsQuery = new QueryBuilder(Product.find(),query).search(['name','description','category']).filter().sort().paginate().fields();
    const result =await productsQuery.modelQuery;
    const meta = await productsQuery.countTotal();
   return {result, meta}
};

const getProductById = async (id: string) => {
    return await Product.findById(id);
};

const updateProductFromDB=async(id:string,payload:Partial<TProduct>)=>{

    const isExsitProduct =await Product.findById(id);
    if (!isExsitProduct) {
       throw new AppError(httpStatus.NOT_FOUND,' PRODUCT not found')
    }
    const result =await Product.findByIdAndUpdate(id,
     {
    ...payload
    
    },{
     new: true,
     runValidators: true,
    })
    return result
 }
 const deleteProductFromDB=async(id:string)=>{
    console.log(id)
    const isExsitProduct =await Product.findById(id);
    console.log(isExsitProduct)
    if (!isExsitProduct) { 
       throw new AppError(httpStatus.NOT_FOUND,'product not found')
    }
    const result =await Product.findByIdAndDelete(id)
    return result
 }


export const productsService = {
    createProductFromDB,
    getAllProducts,
    getProductById,
    updateProductFromDB,
    deleteProductFromDB,
 };


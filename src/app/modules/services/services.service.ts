
import httpStatus from "http-status";
import QueryBuilder from "../../builder/QueryBuilder";
import AppError from "../../errors/AppError";
import { servicesSerchableFields } from "./services.constn";
import { TServices } from "./services.interface";
import { Services } from "./services.model";


const createServicesIntoDB=async(payload:TServices,)=>{

const isExistingServices = await Services.findOne({name:payload.name});
if (isExistingServices) {
   throw new AppError(httpStatus.BAD_REQUEST,'service is already existing')
}
    const result =await Services.create(payload);
    return result;
};
// const createSlotIntoDB=async(payload)=>{
//    console.log(payload);
   
//    const result =await Services.create(payload);
//    return result;
// }
const getAllServicesFromDB=async(query:Record<string,unknown>)=>{
    const servicesQuery = new QueryBuilder(Services.find(),query).search(servicesSerchableFields).filter().sort().paginate().fields();
    const result =await servicesQuery.modelQuery;
    return result
}
const getSingleServicesFromDB=async(id:string)=>{
   const result =await Services.findById(id)
   return result
}
const updateServicesFromDB=async(id:string,payload:Partial<TServices>)=>{

   const isExsitServices =await Services.findById(id);
   if (!isExsitServices) {
      throw new AppError(httpStatus.NOT_FOUND,'service not found')
   }
   const result =await Services.findByIdAndUpdate(id,
    {
   ...payload
   
   },{
    new: true,
    runValidators: true,
   })
   return result
}
const deleteServicesFromDB=async(id:string)=>{
   const isExsitServices =await Services.findById(id);
   if (!isExsitServices) {
      throw new AppError(httpStatus.NOT_FOUND,'service not found')
   }
   const result =await Services.findByIdAndUpdate(id,
    {
    isDeleted: true,
    new: true,
    runValidators: true,

   })
   return result
}

export const servicesServices = {
   createServicesIntoDB,
   // createSlotIntoDB,
   getAllServicesFromDB,
   getSingleServicesFromDB,
   updateServicesFromDB,
   deleteServicesFromDB,
  };
   









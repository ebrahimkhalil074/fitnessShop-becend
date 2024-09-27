/* eslint-disable @typescript-eslint/no-explicit-any */
import AppError from "../../errors/AppError";
import { Tuser } from "./user.interface";
import { Useres } from "./user.model";

const createUserIntoDB=async(payload:Tuser)=>{
    const result =await Useres.create(payload);
    return result;
}
const getAllUsersFromDB =async()=>{
    const result = await Useres.find({});
    return result;
}
const updateUserRoleIntoDB =async (id:string,role:any)=>{
   
    const user = await Useres.findById(id);
    if (!user) {
      throw new AppError( 404,'User not found' );
    }
    const result = await Useres.findByIdAndUpdate(
      { _id: id },
    role,
      {
        new: true,
      },
    );
    return result;
  
  }
const updateUser =async (id:string,payload:any)=>{
   
    const user = await Useres.findById(id);
    if (!user) {
      throw new AppError( 404,'User not found' );
    }
    const result = await Useres.findByIdAndUpdate(
      { _id: id },
    payload,
      {
        new: true,
      },
    );
    return result;
  
  }
 
export const userServices = {
   createUserIntoDB,
   getAllUsersFromDB,
   updateUserRoleIntoDB,
   updateUser
  };
   









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

 
export const userServices = {
   createUserIntoDB,
   getAllUsersFromDB
  };
   









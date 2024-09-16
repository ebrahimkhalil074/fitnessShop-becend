import { model, Schema } from "mongoose";
import { Tuser } from "./user.interface";


const userSchema =new Schema<Tuser>({
name:{
    type:String,
    required:true,
    minlength:2,
    maxlength:20
},
email:{
    type:String,
    required:true,
    unique:true,
  
},

password:{
    type:String,
    required:true,
    minlength:8,
    maxlength:20
},

phone:{
    type:String,
    required:true,
    unique:true
},

role:{
    type:String,
    enum:["user","admin"],
    default:"user"
},

address:{
    type:String,
    required:true
}


})


 export const Useres = model<Tuser>('Useres', userSchema);
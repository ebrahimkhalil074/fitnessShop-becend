import { model, Schema } from "mongoose";
import { TServices } from "./services.interface";



const servicsSchema =new Schema<TServices>({
name:{
    type:String,
    required:true,
    unique:true,
    minlength:2,
    maxlength:20
},
description:{
    type:String,
    required:true,
   
  
},
price:{
    type:Number,
    required:true,
    minlength:8,
    maxlength:20
},

duration:{
    type:Number,
    required:true,
   
},

isDeleted:{
    type:Boolean,
    default:false,
    required:true
},

},{
    timestamps:true,
    versionKey:false,
    collection:'services'
 
})


 export const Services = model<TServices>('Services',servicsSchema);
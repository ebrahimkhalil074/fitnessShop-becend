/* eslint-disable no-unused-vars */
import { Types } from "mongoose";
 export enum VehicleType {
    Car = "car",
    Truck = "truck",
    SUV = "SUV",
    Van = "van",
    Motorcycle = "motorcycle",
    Bus = "bus",
    ElectricVehicle = "electricVehicle",
    HybridVehicle = "hybridVehicle",
    Bicycle = "bicycle",
}
export type TBooking ={
 customer: Types.ObjectId;
 serviceId: Types.ObjectId;
 slotId:Types.ObjectId;
 vehicleType: VehicleType;
 vehicleBrand: string;   
 vehicleModel: string;  
 manufacturingYear: number;
 registrationPlate: string;
}

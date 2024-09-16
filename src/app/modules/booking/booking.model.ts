import { model, Schema } from "mongoose";
import { VehicleType } from "./booking.interface";



const bookingSchema = new Schema({
  customer: { type: Schema.Types.ObjectId, ref: 'Useres', required: true },  // Reference to User
  serviceId: { type: Schema.Types.ObjectId, ref: 'Services', required: true }, // Reference to Service
  slotId: { type: Schema.Types.ObjectId, ref: 'Slot', required: true },      // Reference to Slot
  vehicleType: { 
    type: String, 
    enum: VehicleType, 
    required: true 
  },
  vehicleBrand: { type: String, required: true }, 
  vehicleModel: { type: String, required: true },
  manufacturingYear: { type: Number, required: true },
  registrationPlate: { type: String, required: true, unique: true }
}, {
  timestamps: true  // Adds createdAt and updatedAt timestamps
});

export const booking = model('Booking', bookingSchema);
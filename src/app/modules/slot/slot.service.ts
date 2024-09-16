
import QueryBuilder from "../../builder/QueryBuilder";
import { Services } from "../services/services.model";
import { slotSearchableFields } from "./slot.constan";
import { TSlot } from "./slot.interface";
import { Slot } from "./slot.model";



const createSlotIntoDB=async(payload:TSlot,)=>{
    const {  startTime, endTime } = payload;
// console.log(payload.service)
    const ser = await Services.findById(payload.service)
    // console.log('ser',ser)
    const serviceDuration=ser?.duration as number
    const startInMinutes = convertTimeToMinutes(startTime); // 09:00 → 540
    const endInMinutes = convertTimeToMinutes(endTime);     // 14:00 → 840
  
    // Calculate the total duration
    const totalDuration = endInMinutes - startInMinutes; // 840 - 540 = 300 minutes
  
    // Calculate the number of slots
    const numberOfSlots = totalDuration / serviceDuration; // 300 / 60 = 5 slots
  
    // Array to store the slots
    const slots = [];
  
    // Generate the time slots
    for (let i = 0; i < numberOfSlots; i++) {
      const slotStartInMinutes = startInMinutes + i * serviceDuration;
      const slotEndInMinutes = slotStartInMinutes + serviceDuration;
  
      // Convert minutes back to time format (HH:mm)
      const slotStartTime = convertMinutesToTime(slotStartInMinutes);
      const slotEndTime = convertMinutesToTime(slotEndInMinutes);
  
      // Add slot to the array
      slots.push({
        service:payload.service,
        date:payload.date,
        startTime: slotStartTime,
        endTime: slotEndTime,
        isBooked: 'available',
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    // console.log('slot',slots)
 
  
    const result =await Slot.insertMany(slots);
    return result;
  };
  
  // Helper function to convert time (HH:mm) to minutes from midnight
  const convertTimeToMinutes = (time: string): number => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };
  
  // Helper function to convert minutes from midnight to time (HH:mm)
  const convertMinutesToTime = (minutes: number): string => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${String(hours).padStart(2, '0')}:${String(remainingMinutes).padStart(2, '0')}`;
  };
   
// const getAllSlotsFromDB =async ()=>{
//   const slots = await Slot.find({});
//   return slots;
// }
const getAllAvailableSlotsFromDB = async (
  query: Record<string, unknown>,
) => {
  const slotQuery = new QueryBuilder(Slot.find(), query)
    .search(slotSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await slotQuery.modelQuery;
  const meta = await slotQuery.countTotal();

  return {
    meta,
    result,
  };
};


export const slotServices = {
   createSlotIntoDB,
   getAllAvailableSlotsFromDB,
  };
   









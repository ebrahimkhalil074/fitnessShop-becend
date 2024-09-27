import { z } from "zod";


const createSlotValidationSchema=z.object({
    body:z.object({
        service: z.string({
            required_error:"service is required"
        }),
        date:z.string({
            required_error:"date is required"
        }),
        startTime: z.number({
            required_error:"startTime is required",
            
        }),
        endTime: z.number({
            required_error:"endTime is required",

        }),
        isBooked: z.boolean({
            required_error:"isBooked is required",
        })
    
      })
})


export const slotValidations={
   createSlotValidationSchema

}



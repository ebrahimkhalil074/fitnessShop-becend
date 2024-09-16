import { z } from "zod";


const createServicesValidationSchema=z.object({
    body:z.object({
        name: z.string({
            required_error:"name is required"
        }),
        description:z.string({
            required_error:"description is required"
        }),
        price: z.number({
            required_error:"price is required",
            
        }),
        duration: z.number({
            required_error:"duration is required",

        }),
        isDeleted: z.boolean({
            required_error:"isDeleted is required",
        })
    
      })
})


export const servicesValidations={
   createServicesValidationSchema

}

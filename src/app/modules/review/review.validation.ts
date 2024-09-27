import { z } from "zod";


const createReviewValidationSchema=z.object({
    body:z.object({
        name: z.string({
            required_error:"name is required"
        }),
        description:z.string({
            required_error:"description is required"
        }),
        ratting: z.number({
            required_error:"startTime is required",
            
        }),
        
    
      })
})


export const reviewValidations={
  createReviewValidationSchema

}

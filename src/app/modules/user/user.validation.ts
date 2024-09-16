import { z } from "zod";

const createUserValidationSchema=z.object({
    body:z.object({
        name: z.string({
            required_error:"name is required"
        })
          .min(3, { message: "Name must be at least 3 characters long" })
          .max(20, { message: "Name must be at most 20 characters long" }),
          
        
        email: z.string({
            required_error:"email is required"
        })
          .email({ message: "Invalid email address" })
          .min(1, { message: "Email is required" }),
        
        password: z.string({
            required_error:"password is required"
        })
          .min(8, { message: "Password must be at least 8 characters long" })
          .max(20, { message: "Password must be at most 20 characters long" })
          .min(1, { message: "Password is required" }),
        
        phone: z.string({
            required_error:"phone is required"
        })
          .min(1, { message: "Phone number is required" })
          .refine((val) => val.toString().length >= 10, {
            message: "Phone number must be at least 10 digits long",
          }),
        
        role: z.enum(["user", "admin"]).default("user"),
        
        address: z.string({
            required_error:"address is required"
        })
          
      })
})


export const userValidations={
    createUserValidationSchema
}



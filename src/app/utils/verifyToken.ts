 
 import { jwtDecode } from "jwt-decode";

 export const verifyToken=(token: string )=>{
    console.log( 'vf',token)
return jwtDecode(token)
}
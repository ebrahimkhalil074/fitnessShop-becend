import orderModel from "../order/order.model"
import { verifyPayment } from "./payment.utills"

const confirmPayment = async(transactionId :string,status : string)=>{
    console.log(status)
    let result
 // Perform additional validations and business logic here...
const verifyPaymentResponce = await verifyPayment(transactionId);
if (verifyPaymentResponce && verifyPaymentResponce.pay_status === "Successful"){
    result = await orderModel.findOneAndUpdate({transactionId},{
        paymentStatus: "Paid"
      }, {new: true})
}



  return `<h1 >Payment ${status}</h1>`
}



export const paymentService ={
  confirmPayment  
}
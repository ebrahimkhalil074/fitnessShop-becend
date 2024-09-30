import axios from 'axios'

import dotenv from 'dotenv'
dotenv.config()

 export const initiatePayment =async(paymentInfo :any)=>{
    const responce = await axios.post(process.env.PAYMENT_URL!,{
        
            store_id: process.env.STORE_ID,
            signature_key: process.env.SINGTURE_Key,
            cus_name:paymentInfo.customerName,
            cus_email: paymentInfo.customerEmail,
            cus_phone: paymentInfo.customerPhone,
            cus_add1: paymentInfo.customerAddress,
            cus_add2: "N/A",
            cus_city: "N/A",
            cus_country: "Bangladesh",
            amount: paymentInfo.totalPrice,
            tran_id: paymentInfo.transactionId,
            currency: "BDT",
            success_url:`http://localhost:5000/api/payment/confirmation?transactionId=${paymentInfo.transactionId}&status=Success`,
            fail_url:`http://localhost:5000/api/payment/confirmation?status=Failed`,
            cancel_url: "http://localhost:5173/",
            desc: "Lend Money",
            type: "json"
            }
    )

return responce.data
}

export const verifyPayment = async(transactionId :string)=>{
        const responce = await axios.get(`${process.env.PAYMENT_VERIFY_URL}`,{
            params:{
                store_id: process.env.STORE_ID,
                signature_key: process.env.SINGTURE_Key,
                type:"json",
                request_id: transactionId
            }
        })
       
        return responce.data
}
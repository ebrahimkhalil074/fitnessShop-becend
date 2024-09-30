import mongoose from "mongoose";

 export interface IOrder extends Document {
    user: {
        name: string,
        email: string,
        phone: string,
        address: string
    };
    products: Array<{
        product: mongoose.Schema.Types.ObjectId;
        quantity: number;
    }>;
    totalPrice: number;
    status: string;
    paymentStatus: string;
    transactionId: string;
}
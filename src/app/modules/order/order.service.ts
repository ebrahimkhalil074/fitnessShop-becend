// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { initiatePayment } from '../payment/payment.utills';
// import Product from '../products/product.model';

// import Order from './order.model';

// const createOrder = async (orderData: any) => {
//     const { user, products } = orderData;

//     let totalPrice = 0;
 
//     // Calculate the total price
//     const productDetails = await Promise.all(
//         products.map(async (item: any) => {
//             const product = await Product.findById(item.product);
//             if (product) {
//                 totalPrice += product.price * item.quantity;
//                 return {
//                     product: product._id,
//                     quantity: item.quantity
//                 };
//             } else {
//                 throw new Error('Product not found');
//             }
//         })
//     ); 

//     const transactionId = `TXN-${Date.now()}`;

//     const order = new Order({
//         user,
//         products: productDetails,
//         totalPrice,
//         status: 'Pending',
//         paymentStatus: 'Pending',
//         transactionId
//     });

//     const paymentInfo ={
//         transactionId,
//         totalPrice,
//         customerName:user.name,
//         customerEmail:user.email,
//         customerPhone:user.phone,
//         customerAddress:user.address,
//     }

//     await order.save();
//     // payment
//     const paymentSession = initiatePayment(paymentInfo)
//     console.log(paymentSession)

//     return paymentSession;
// };


// export const orderService = {
//     createOrder
// }

/* eslint-disable @typescript-eslint/no-explicit-any */
import { initiatePayment } from '../payment/payment.utills';
import Product from '../products/product.model';
import Order from './order.model';

const createOrder = async (orderData: any) => {
    const { user, products } = orderData;

    let totalPrice = 0;

    // Calculate the total price and update stock
    const productDetails = await Promise.all(
        products.map(async (item: any) => {
            const product = await Product.findById(item.product);
            if (product) {
                // Check if there is enough stock
                if (product.stock < item.quantity) {
                    throw new Error(`Not enough stock for product ${product.name}`);
                }

                // Deduct the ordered quantity from the product stock
                product.stock -= item.quantity;
                await product.save();

                totalPrice += product.price * item.quantity;

                return {
                    product: product._id,
                    quantity: item.quantity
                };
            } else {
                throw new Error('Product not found');
            }
        })
    );

    const transactionId = `TXN-${Date.now()}`;

    const order = new Order({
        user,
        products: productDetails,
        totalPrice,
        status: 'Pending',
        paymentStatus: 'Pending',
        transactionId
    });

    const paymentInfo = {
        transactionId,
        totalPrice,
        customerName: user.name,
        customerEmail: user.email,
        customerPhone: user.phone,
        customerAddress: user.address,
    };

    await order.save();

    // Initiate payment
    const paymentSession = initiatePayment(paymentInfo);
    console.log(paymentSession);

    return paymentSession;
};

export const orderService = {
    createOrder
};

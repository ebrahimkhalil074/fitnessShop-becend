import { Router } from 'express';
import { userRoutes } from '../modules/user/user.route';
import { AuthRoutes } from '../modules/Auth/auth.route';
import { productRoutes } from '../modules/products/product.routes';
import { categoryRoutes } from '../modules/category/category.route';
import { orderRoutes } from '../modules/order/order.route';
import { paymentRoutes } from '../modules/payment/payment.route';


const router = Router();

const moduleRoutes = [
  {
    path:"/auth",
    route:userRoutes
  },
  {
    path:"/auth",
    route:AuthRoutes
  },
  {
    path:"/product",
    route:productRoutes
  },
  {
    path:"/category",
    route:categoryRoutes
  },
  {
    path:"/order",
    route:orderRoutes
  },
  {
    path:"/payment",
    route:paymentRoutes
  },


  
]; 

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

import { Router } from 'express';
import { userRoutes } from '../modules/user/user.route';
import { servicesRoutes } from '../modules/services/services.route';
import { AuthRoutes } from '../modules/Auth/auth.route';
import { slotRoutes } from '../modules/slot/slot.route';
import { bookingRoutes } from '../modules/booking/booking.route';
import { reviewRoutes } from '../modules/review/review.route';



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
    path:"/services",
    route:servicesRoutes
  },
  {
    path:"/slots",
    route:slotRoutes
  },
  {
    path:"/bookings",
    route:bookingRoutes
  },
  {
    path:"/review",
    route:reviewRoutes
  },
  
]; 

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

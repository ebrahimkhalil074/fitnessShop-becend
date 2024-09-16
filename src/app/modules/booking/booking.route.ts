import express from 'express';
import { bookingController } from './booking.controller';


const router =express.Router();

router.post('/',bookingController.createBooking);
router.get('/',bookingController.getAllBookings);
router.get('/my-bookings' ,bookingController.getAllUserBookings);

export const bookingRoutes =router
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingRoutes = void 0;
const express_1 = __importDefault(require("express"));
const booking_controller_1 = require("./booking.controller");
const router = express_1.default.Router();
router.post('/', booking_controller_1.bookingController.createBooking);
router.get('/', booking_controller_1.bookingController.getAllBookings);
router.get('/my-bookings', booking_controller_1.bookingController.getAllUserBookings);
exports.bookingRoutes = router;
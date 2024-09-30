"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentRoutes = void 0;
const express_1 = require("express");
const payment_controllar_1 = require("./payment.controllar");
const router = (0, express_1.Router)();
// Route to create an order
router.post('/confirmation', payment_controllar_1.paymentController.confriMationController);
exports.paymentRoutes = router;

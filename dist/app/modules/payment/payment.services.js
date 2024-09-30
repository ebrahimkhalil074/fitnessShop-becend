"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentService = void 0;
/* eslint-disable no-unused-vars */
const order_model_1 = __importDefault(require("../order/order.model"));
const payment_utills_1 = require("./payment.utills");
const confirmPayment = (transactionId, status) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(status);
    let result;
    // Perform additional validations and business logic here...
    const verifyPaymentResponce = yield (0, payment_utills_1.verifyPayment)(transactionId);
    if (verifyPaymentResponce && verifyPaymentResponce.pay_status === "Successful") {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        result = yield order_model_1.default.findOneAndUpdate({ transactionId }, {
            paymentStatus: "Paid"
        }, { new: true });
    }
    return `<h1 >Payment ${status}</h1>`;
});
exports.paymentService = {
    confirmPayment
};

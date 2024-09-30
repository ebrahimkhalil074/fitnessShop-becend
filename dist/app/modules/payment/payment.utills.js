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
exports.verifyPayment = exports.initiatePayment = void 0;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const initiatePayment = (paymentInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const responce = yield axios_1.default.post(process.env.PAYMENT_URL, {
        store_id: process.env.STORE_ID,
        signature_key: process.env.SINGTURE_Key,
        cus_name: paymentInfo.customerName,
        cus_email: paymentInfo.customerEmail,
        cus_phone: paymentInfo.customerPhone,
        cus_add1: paymentInfo.customerAddress,
        cus_add2: "N/A",
        cus_city: "N/A",
        cus_country: "Bangladesh",
        amount: paymentInfo.totalPrice,
        tran_id: paymentInfo.transactionId,
        currency: "BDT",
        success_url: `http://localhost:5000/api/payment/confirmation?transactionId=${paymentInfo.transactionId}&status=Success`,
        fail_url: `http://localhost:5000/api/payment/confirmation?status=Failed`,
        cancel_url: "http://localhost:5173/",
        desc: "Lend Money",
        type: "json"
    });
    return responce.data;
});
exports.initiatePayment = initiatePayment;
const verifyPayment = (transactionId) => __awaiter(void 0, void 0, void 0, function* () {
    const responce = yield axios_1.default.get(`${process.env.PAYMENT_VERIFY_URL}`, {
        params: {
            store_id: process.env.STORE_ID,
            signature_key: process.env.SINGTURE_Key,
            type: "json",
            request_id: transactionId
        }
    });
    return responce.data;
});
exports.verifyPayment = verifyPayment;

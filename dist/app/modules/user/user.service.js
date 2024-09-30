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
exports.userServices = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const AppError_1 = __importDefault(require("../../errors/AppError"));
const user_model_1 = require("./user.model");
const createUserIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.Useres.create(payload);
    return result;
});
const getAllUsersFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.Useres.find({});
    return result;
});
const updateUserRoleIntoDB = (id, role) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.Useres.findById(id);
    if (!user) {
        throw new AppError_1.default(404, 'User not found');
    }
    const result = yield user_model_1.Useres.findByIdAndUpdate({ _id: id }, role, {
        new: true,
    });
    return result;
});
const updateUser = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.Useres.findById(id);
    if (!user) {
        throw new AppError_1.default(404, 'User not found');
    }
    const result = yield user_model_1.Useres.findByIdAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
exports.userServices = {
    createUserIntoDB,
    getAllUsersFromDB,
    updateUserRoleIntoDB,
    updateUser
};

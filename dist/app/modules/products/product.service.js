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
exports.productsService = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const http_status_1 = __importDefault(require("http-status"));
const QueryBuilder_1 = __importDefault(require("../../builder/QueryBuilder"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const product_model_1 = __importDefault(require("./product.model"));
const createProductFromDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.create(payload);
    return result;
});
const getAllProducts = (query) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('ser', query);
    const productsQuery = new QueryBuilder_1.default(product_model_1.default.find(), query).search(['name', 'description', 'category']).filter().sort().paginate().fields();
    const result = yield productsQuery.modelQuery;
    const meta = yield productsQuery.countTotal();
    return { result, meta };
});
const getProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield product_model_1.default.findById(id);
});
const updateProductFromDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isExsitProduct = yield product_model_1.default.findById(id);
    if (!isExsitProduct) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, ' PRODUCT not found');
    }
    const result = yield product_model_1.default.findByIdAndUpdate(id, Object.assign({}, payload), {
        new: true,
        runValidators: true,
    });
    return result;
});
const deleteProductFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(id);
    const isExsitProduct = yield product_model_1.default.findById(id);
    console.log(isExsitProduct);
    if (!isExsitProduct) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'product not found');
    }
    const result = yield product_model_1.default.findByIdAndDelete(id);
    return result;
});
exports.productsService = {
    createProductFromDB,
    getAllProducts,
    getProductById,
    updateProductFromDB,
    deleteProductFromDB,
};

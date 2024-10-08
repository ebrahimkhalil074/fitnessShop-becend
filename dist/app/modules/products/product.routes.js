"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const express_1 = require("express");
const product_controller_1 = require("./product.controller");
const router = (0, express_1.Router)();
router.post('/', product_controller_1.productsController.createProduct);
router.get('/', product_controller_1.productsController.getAllProductsHandler);
router.get('/:id', product_controller_1.productsController.getProductByIdHandler);
router.put('/:id', product_controller_1.productsController.updateProduct);
router.delete('/:id', product_controller_1.productsController.deleteProduct);
exports.productRoutes = router;

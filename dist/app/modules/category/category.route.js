"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRoutes = void 0;
const express_1 = require("express");
const category_controller_1 = require("./category.controller");
const router = (0, express_1.Router)();
router.post('/', category_controller_1.categoryController.createCategoryHandler);
router.get('/', category_controller_1.categoryController.getAllCategoryHandler);
exports.categoryRoutes = router;

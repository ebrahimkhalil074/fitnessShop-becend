"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
router.post('/signup', user_controller_1.userController.createUser);
router.get('/users', user_controller_1.userController.getAllUsersFromDB);
router.put('/users/:id/role', user_controller_1.userController.updateUserRole);
router.put('/users/:id/user', user_controller_1.userController.updateUser);
exports.userRoutes = router;

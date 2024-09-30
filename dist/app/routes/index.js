"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_route_1 = require("../modules/user/user.route");
const auth_route_1 = require("../modules/Auth/auth.route");
const product_routes_1 = require("../modules/products/product.routes");
const category_route_1 = require("../modules/category/category.route");
const order_route_1 = require("../modules/order/order.route");
const payment_route_1 = require("../modules/payment/payment.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/auth",
        route: user_route_1.userRoutes
    },
    {
        path: "/auth",
        route: auth_route_1.AuthRoutes
    },
    {
        path: "/product",
        route: product_routes_1.productRoutes
    },
    {
        path: "/category",
        route: category_route_1.categoryRoutes
    },
    {
        path: "/order",
        route: order_route_1.orderRoutes
    },
    {
        path: "/payment",
        route: payment_route_1.paymentRoutes
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewValidations = void 0;
const zod_1 = require("zod");
const createReviewValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: "name is required"
        }),
        description: zod_1.z.string({
            required_error: "description is required"
        }),
        ratting: zod_1.z.number({
            required_error: "startTime is required",
        }),
    })
});
exports.reviewValidations = {
    createReviewValidationSchema
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.review = void 0;
const mongoose_1 = require("mongoose");
const reviewSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    ratting: { type: Number, min: 1, max: 5, required: true },
});
exports.review = (0, mongoose_1.model)('Review', reviewSchema);

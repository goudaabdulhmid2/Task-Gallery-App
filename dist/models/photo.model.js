"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Photo = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const photoSchema = new mongoose_1.default.Schema({
    path: {
        type: String,
        required: true
    },
    title: String
});
exports.Photo = mongoose_1.default.model("Photo", photoSchema);

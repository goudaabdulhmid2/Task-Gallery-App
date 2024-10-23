"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
class DatabaseService {
    DATABASE_URI = process.env.DATABASE_URI || "mongodb://127.0.0.1:27017/gallery";
    static instance;
    db;
    static getInstance() {
        if (this.instance)
            return this.instance;
        this.instance = new DatabaseService();
        return this.instance;
    }
    async connect() {
        if (this.db)
            return this.db;
        this.db = await mongoose_1.default.connect(this.DATABASE_URI);
        return this.db;
    }
    async disconnect() {
        if (!this.db)
            return;
        await this.db.disconnect();
        this.db = undefined;
    }
}
exports.default = DatabaseService.getInstance();
